/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * TerminateFriendship
 */
class TerminateFriendship extends Packet {
  static id = 300
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['exBlock', { quantity: 1, parameters: new Collection([['other', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.exBlock.other] OtherID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default TerminateFriendship
