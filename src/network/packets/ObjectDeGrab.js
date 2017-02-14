/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities'

import * as Types from '../types'

/**
 * ObjectDeGrab Packet
 */
class ObjectDeGrab extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 119

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
  static trusted = false

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
    ['agentData', { quantity: 1, parameters: new Collection([['agent', Types.UUID], ['session', Types.UUID]]) }],
    ['objectData', { quantity: 1, parameters: new Collection([['local', Types.U32]]) }],
    ['surfaceInfo', { parameters: new Collection([['uVCoord', Types.Vector3], ['sTCoord', Types.Vector3], ['faceIndex', Types.S32], ['position', Types.Vector3], ['normal', Types.Vector3], ['binormal', Types.Vector3]]) }]
  ])

  /**
   * ObjectDeGrab constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link ObjectDeGrab.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.agentData.agent] AgentID
   * @param {LLUUID} [data.agentData.session] SessionID
   * @param {U32} [data.objectData.local] LocalID
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

export default ObjectDeGrab
