class IP {
  static size = 1

  /**
   * Converts an IP address (string) input into a buffer, one place per byte, 4
   * bytes wide.
   *
   * @param {string} string IP address string to convert
   * @returns {Buffer}
   */
  static toBuffer (string) {
    const ip = string.split('.')
    const buffer = Buffer.allocUnsafe(this.size)

    buffer.writeUInt8(ip[0], 0)
    buffer.writeUInt8(ip[1], 1)
    buffer.writeUInt8(ip[2], 2)
    buffer.writeUInt8(ip[3], 3)

    return buffer
  }

  /**
   * Converts buffer input into a string representing an IP address
   *
   * @param {Buffer} buffer Buffer to convert
   * @param {integer} position Position to read from
   * @returns {integer}
   */
  static fromBuffer (buffer, position = 0) {
    return [
      buffer.readUInt8(position),
      buffer.readUInt8(position + 1),
      buffer.readUInt8(position + 2),
      buffer.readUInt8(position + 3)
    ].join('.')
  }
}

export default IP
