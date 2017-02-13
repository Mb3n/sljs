/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * LeaveGroupRequest
 */
class LeaveGroupRequest extends Packet {
  static id = 347
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['groupData', { quantity: 1, parameters: [['group', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.groupData.group] GroupID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default LeaveGroupRequest
