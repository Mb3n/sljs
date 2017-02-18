/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * MapBlockReply Packet
 */
class MapBlockReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 409

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  static frequency = 0

  /**
   * If this value is true, the client cannot send this packet as circuits only
   * accept trusted packets from internal connections (to utility servers etc).
   *
   * @type {[type]}
   */
  static trusted = true

  /**
   * States if this packet should use or be using zerocoding, to attempt to
   * compress the sequences of zeros in the message in order to reduce network
   * load.
   *
   * @type {[type]}
   */
  static compression = false

  /**
   * Determines the blocks that are are contained in the message and it's
   * required parameters.
   *
   * @see {@link http://wiki.secondlife.com/wiki/Message_Layout}
   * @type {Collection}
   */
  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['flags', Types.U32]]) }],
    ['data', { parameters: new Collection([['x', Types.U16], ['y', Types.U16], ['name', Types.Variable1], ['access', Types.U8], ['regionFlags', Types.U32], ['waterHeight', Types.U8], ['agents', Types.U8], ['mapImage', Types.UUID]]) }]
  ])

  /**
   * MapBlockReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link MapBlockReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {U32} [data.agentData.flags] Flags
   * @param {U16} [data.data.x] X
   * @param {U16} [data.data.y] Y
   * @param {Variable1} [data.data.name] Name
   * @param {U8} [data.data.access] Access
   * @param {U32} [data.data.regionFlags] RegionFlags
   * @param {U8} [data.data.waterHeight] WaterHeight
   * @param {U8} [data.data.agents] Agents
   * @param {UUID} [data.data.mapImage] MapImageID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default MapBlockReply
