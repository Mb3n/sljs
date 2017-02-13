/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * AgentCachedTextureResponse
 */
class AgentCachedTextureResponse extends Packet {
  static id = 385
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID'], ['serialNum', 'S32']] }],
    ['wearableData', { parameters: [['texture', 'LLUUID'], ['textureIndex', 'U8'], ['hostName', 'Variable1']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {S32} [data.agentData.serialNum] SerialNum
   * @param {LLUUID} [data.wearableData.texture] TextureID
   * @param {U8} [data.wearableData.textureIndex] TextureIndex
   * @param {Variable1} [data.wearableData.hostName] HostName
   */
  constructor (data = {}) {
    super(data)
  }
}

export default AgentCachedTextureResponse
