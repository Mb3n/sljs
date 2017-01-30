const Constants = require('../../utilities/Constants');
const dgram = require('dgram');
const Packet = require('./packets/Packet');
const PacketBuffer = require('./packets/PacketBuffer');
const PacketHandler = require('./packets/PacketHandler');
const UDPMethods = require('./UDPMethods');

/**
 * The UDPManager handles connecting to a Simulator, processing and sending
 * messages. It's basically 99% of the the networking behind Client.
 * @extends {EventEmitter}
 */
class UDPManager {
  /**
   * @param {Client} Client value for emiting processed messages back to
   */
  constructor(client) {
    /**
     * The Client that instantiated this UDPManager.
     * @type {Client}
     */
    this.client = client;

    /**
     * The UDP Packet manager, it handles all the messages!
     * @type {PacketManager}
     */
    this.handler = new PacketHandler(this);

    /**
     * Method helper, for sending UDP packets.
     * @type {UDPMethods}
     */
    this.methods = new UDPMethods(this);

    /**
     * The UDP connection/socket.
     * @type {?dgram}
     */
    this.udp = this.setup();

    /**
     * The status of the UDPManager, a type of Constants.Status, IDLE default
     * @type {number}
     */
    this.status = Constants.Status.IDLE;

    /**
     * The packet index, sequence number, see the link.
     * @link http://wiki.secondlife.com/wiki/Packet_Layout
     * @type {number}
     */
    this.packet = 1;
  }

  /**
   * Creates our UDP socket
   * @return {dgram} dgram socket
   */
  setup() {
    const socket = dgram.createSocket('udp4');

    socket.on('error', (error) => {
      this.emit('error', `dgram Error!\n${error.stack}`);
      console.error(error);
    });

    socket.on('message', this.handle.bind(this));

    return socket;
  }

  get agent() {
    return this.client.agent;
  }

  get simulator() {
    return this.client.simulator;
  }

  /**
   * Sends message to current Simulator over UDP socket.
   * @param {Packet|Number} input Packet or PKID to be sent
   * @param {Object} parameters Not required if sending Packet object
   * @return {Promise}
   */
  send(input, parameters = undefined) {
    const number = this.packet++;

    // TODO: Check we are still connected.
    // TODO: Checkout LLMessageSystem for handling reliable packets, need to
    // queue it, and where it came from with a timeout of sorts before resend,
    // and a handler hook for picking up ACKs from the sim.
    // TODO: Look into packet compression, mMessageBuilder->compressMessage().
    return new Promise((resolve, reject) => {
      const packet = typeof input === 'object' ? input : Packet.create(input, parameters);
      const buffer = packet.buffer(this.handler, number);

      this.udp.send(buffer, 0, buffer.length, this.simulator.port, this.simulator.ip, (error) => {
        // TODO: Remove this once debugging is finished.
        console.log('\x1b[32m\u276F\x1b[0m ' + this.handler.name(packet));

        if (error) {
          this.client.emit('error', error);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Messages from dgram are recieved and processed here.
   * @param {Buffer} message The raw message recieved
   * @param {Object} info Packet info such as; address, port and size
   */
  handle(buffer, info) {
    return this.handler.process(new PacketBuffer(buffer), info);
  }

  /**
   * Connects the client to a given circuit code.
   */
  handshake() {
    /*if (typeof this.agent !== 'Agent') {
      // ...
    }

    if (typeof this.simulator !== 'Simulator') {
      // ...
    }*/

    this.status = Constants.Status.CONNECTING;
    this.client.emit('debug', `Connecting to simulator ${this.simulator.ip}:${this.simulator.port}...`);

    return this.methods.useCircuitCode()
      .then(() => this.methods.completeAgentMovement())
      .then(() => {
        this.status = Constants.Status.READY;
        this.client.emit('debug', `Connection established to ${this.simulator.ip}:${this.simulator.port}`);
      })
      .catch((error) => {
        this.status = Constants.Status.DISCONNECTED;
        this.client.emit('debug', `Connection to ${this.simulator.ip}:${this.simulator.port} failed!`);
        this.client.emit('error', error);
      });
  }
}

module.exports = UDPManager;
