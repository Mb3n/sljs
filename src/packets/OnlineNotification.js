/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * OnlineNotification
 */
class OnlineNotification extends Packet {
  static id = 322
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentBlock', { parameters: [['agent', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentBlock.agent] AgentID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default OnlineNotification
