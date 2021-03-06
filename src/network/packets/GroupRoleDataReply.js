/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * GroupRoleDataReply Packet
 */
class GroupRoleDataReply extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 372

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID]]) }],
    ['groupData', { quantity: 1, parameters: new Collection([['group', Types.UUID], ['request', Types.UUID], ['roleCount', Types.S32]]) }],
    ['roleData', { parameters: new Collection([['role', Types.UUID], ['name', Types.Variable1], ['title', Types.Variable1], ['description', Types.Variable1], ['powers', Types.U64], ['members', Types.U32]]) }]
  ])

  /**
   * GroupRoleDataReply constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link GroupRoleDataReply.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {UUID} [data.agentData.agent] AgentID
   * @param {UUID} [data.groupData.group] GroupID
   * @param {UUID} [data.groupData.request] RequestID
   * @param {S32} [data.groupData.roleCount] RoleCount
   * @param {UUID} [data.roleData.role] RoleID
   * @param {Variable1} [data.roleData.name] Name
   * @param {Variable1} [data.roleData.title] Title
   * @param {Variable1} [data.roleData.description] Description
   * @param {U64} [data.roleData.powers] Powers
   * @param {U32} [data.roleData.members] Members
   */
  constructor (data = {}) {
    super(data)
  }
}

export default GroupRoleDataReply
