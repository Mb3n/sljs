class F32 {
  static size = 4

  /**
   * Converts number input into a buffer representing an 32-bit float.
   *
   * @param {number} float Number/float to convert
   * @returns {Buffer}
   */
  static toBuffer (float) {
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeFloatLE(float, 0)

    return buffer
  }

  /**
   * Converts buffer input into an number which was representing an 32-bit
   * float.
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {number}
   */
  static fromBuffer (buffer, position = 0) {
    return buffer.readFloatLE(position)
  }
}

export default F32
