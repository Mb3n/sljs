/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * ObjectGrab
 */
class ObjectGrab extends Packet {
  static id = 117
  static frequency = 0
  static trusted = false
  static compression = true

  static format = new Collection([
    ['agentData', { quantity: 1, parameters: [['agent', 'LLUUID'], ['session', 'LLUUID']] }],
    ['objectData', { quantity: 1, parameters: [['local', 'U32'], ['grabOffset', 'LLVector3']] }],
    ['surfaceInfo', { parameters: [['uVCoord', 'LLVector3'], ['sTCoord', 'LLVector3'], ['faceIndex', 'S32'], ['position', 'LLVector3'], ['normal', 'LLVector3'], ['binormal', 'LLVector3']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.local] LocalID
   * @param {LLVector3} [data.objectData.grabOffset] GrabOffset
   * @param {LLVector3} [data.surfaceInfo.uVCoord] UVCoord
   * @param {LLVector3} [data.surfaceInfo.sTCoord] STCoord
   * @param {S32} [data.surfaceInfo.faceIndex] FaceIndex
   * @param {LLVector3} [data.surfaceInfo.position] Position
   * @param {LLVector3} [data.surfaceInfo.normal] Normal
   * @param {LLVector3} [data.surfaceInfo.binormal] Binormal
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectGrab
