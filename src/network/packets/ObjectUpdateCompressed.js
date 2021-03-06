/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../../utilities/Collection'

import * as Types from '../types'

/**
 * ObjectUpdateCompressed Packet
 */
class ObjectUpdateCompressed extends Packet {
  /**
   * Packet ID, this value is only unique per-frequency range, see key get
   * method of Packet, plus the buffer helper of the network namespace for
   * generating a lookup codes.
   *
   * @type {number}
   */
  static id = 13

  /**
   * Packet frequency. This value determines whether the message ID is 8, 16, or
   * 32 bits. There can be unique 254 messages IDs in the "High" or "Medium"
   * frequencies and 32,000 in "Low". A message with a "Fixed" frequency also
   * defines its own ID and is considered to be a signal.
   *
   * @type {number}
   */
  static frequency = 2

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
    ['regionData', { quantity: 1, parameters: new Collection([['regionHandle', Types.U64], ['timeDilation', Types.U16]]) }],
    ['objectData', { parameters: new Collection([['updateFlags', Types.U32], ['data', Types.Variable2]]) }]
  ])

  /**
   * ObjectUpdateCompressed constructor, can be passed either a fully
   * initialized Packet Buffer or an object containing this Objects required
   * parameters from {@link ObjectUpdateCompressed.format}. Note that
   * "agentData" blocks may be excluded if {@link build} is able to fetch the
   * requirements itself.
   *
   * @param {(Object|Buffer)} [data] Packet block data to be seralized, may be optional
   * @param {U64} [data.regionData.regionHandle] RegionHandle
   * @param {U16} [data.regionData.timeDilation] TimeDilation
   * @param {U32} [data.objectData.updateFlags] UpdateFlags
   * @param {Variable2} [data.objectData.data] Data
   */
  constructor (data = {}) {
    super(data)
  }
}

export default ObjectUpdateCompressed
