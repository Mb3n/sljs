/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LogoutRequest
 */
class LogoutRequest extends Packet {
  static id = 252
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LogoutRequest
