/* eslint-disable max-len */

import Packet from './Packet'
import Collection from '../utilities'

/**
 * SimulatorMapUpdate
 */
class SimulatorMapUpdate extends Packet {
  static id = 5
  static frequency = 0
  static trusted = true
  static compression = false

  static format = new Collection([
    ['mapData', { quantity: 1, parameters: [['flags', 'U32']] }]
  ])

  /**
   * @param {Object} [data] Packet block data to be seralized, may be optional
   * @param {U32} [data.mapData.flags] Flags
   */
  constructor (data = {}) {
    super(data)
  }
}

export default SimulatorMapUpdate
