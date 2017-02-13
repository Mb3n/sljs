/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * RemoveParcel
 */
class RemoveParcel extends Packet {
  static id = 222
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['parcelData', { parameters: [['parcel', 'LLUUID']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {LLUUID} [data.parcelData.parcel] ParcelID
   */
  constructor (data = {}) {
    super(data)
  }
}

export default RemoveParcel
