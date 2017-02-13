/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ScriptReset
 */
class ScriptReset extends Packet {
  static id = 246
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['script', { quantity: 1, parameters: [['object', 'LLUUID'], ['item', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.script.object] ObjectID
   * @param {LLUUID} [data.script.item] ItemID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ScriptReset
