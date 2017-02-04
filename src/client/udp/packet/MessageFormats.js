const Constants = require('../../../utilities/Constants');
const fs = require('fs');
const Packet = require('./PacketFormat');
const PKID = require('../../../utilities/Packets');

const COMMENT_REGEX = / ?[\w+]?\/\/.*?$|^version.*$/gm;

// TODO: Make this shorter?
const MESSAGE_REGEX = new RegExp(
  /{\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)\s+(\w+)[\s+]?(\w+)?\s+(({\s+(\w+\s+)+({\s+(\w+\s+(\d\s+)?){2,}}\s+)+}\s+)+)?}/,
  'g'
);

const BLOCK_REGEX = /{\s+(\w+)\s+(\w+)\s+?(\d)?((?:\s+{[\s\w]+})+)?\s+}/g;
const BLOCK_PARAMETER_REGEX = /{\s+(\w+)\s+(\w+(?:\s+\d+)?)\s+}/g;

const FREQUENCY_LIST = ['Low', 'Medium', 'High', 'Fixed'];

class MessageFormats {
  static load() {
    let formats = {};

    // https://bitbucket.org/lindenlab/master-message-template/raw/tip/message_template.msg
    // https://bitbucket.org/lindenlab/master-message-template/raw/tip/message_template.msg.sha1
    const template = `${__dirname}/template/message_template.msg`;
    const messages = fs.readFileSync(template, 'utf8').replace(COMMENT_REGEX, '');

    // TODO: Store parsed result as JSON or better, don't do this every run.
    // TODO: CLean this up, move handling into seperate methods or something.
    messages.replace(MESSAGE_REGEX, (s0, name, frequency, number, trusted, encoding, flag, blocks) => {
      let data = {
        name: name,
        number: Number(number),
        frequency: FREQUENCY_LIST.indexOf(frequency),
        trusted: trusted === 'Trusted',
        compression: encoding === 'Zerocoded',
        deprecated: flag === 'UDPDeprecated' || flag === 'Deprecated',
        blacklisted: flag === 'UDPBlacklisted' || flag === 'Blacklisted',
        format: []
      };

      let key = Number(`${data.number}${data.frequency}`);

      if (blocks) {
        blocks.replace(BLOCK_REGEX, (s1, label, prefix, quantity, parameters) => {
          let format = {
            name: label.replace(/[a-z](ID)$/, find => find[0]).replace(/^FOV|^ID|\b\w/, find => find.toLowerCase()),
            quantity: Number(quantity) || (prefix === 'Single' ? 1 : undefined)
          };

          if (parameters) {
            format.parameters = [];

            parameters.replace(BLOCK_PARAMETER_REGEX, (s2, block, type) => {
              format.parameters.push({
                name: block.replace(/[a-z](ID)$/, find => find[0]).replace(/^FOV|^ID|\b\w/, find => find.toLowerCase()),
                type: type.replace(/\s+/, '')
              });
            });
          }

          data.format.push(format);
        });
      }

      if (typeof PKID[name] === 'undefined') {
        throw new Error(`${Constants.Errors.UNKNOWN_PACKET_ID}${name}:${key}.`);
      }

      formats[key] = new Packet(key, data);
    });

    // fs.writeFileSync(
    //   `${__dirname}/template/message_template.json`,
    //   JSON.stringify(Object.values(formats), null, 4),
    //   'utf-8'
    // );

    return formats;
  }
}

module.exports = MessageFormats;