/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * CancelAuction
 */
class CancelAuction extends Packet {
  static id = 232
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['parcelData', { parameters: new Collection([['parcel', 'LLUUID']]) }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.parcelData.parcel] ParcelID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default CancelAuction
