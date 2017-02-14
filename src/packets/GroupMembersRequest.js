/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * GroupMembersRequest
 */
class GroupMembersRequest extends Packet {
  static id = 366
  static frequency = 0
  static trusted = false
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: new Collection([['agent', 'LLUUID'], ['session', 'LLUUID']]) }],
    ['groupData', { quantity: 1, parameters: new Collection([['group', 'LLUUID'], ['request', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {LLUUID} [data.groupData.group] GroupID
   * @param {LLUUID} [data.groupData.request] RequestID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupMembersRequest
