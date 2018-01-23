import StorageInterface from './StorageInterface'
export default class StorageSimple extends StorageInterface {
  constructor () {
    super()
    /**
     * @private
     */
    this._data = {}
  }

  /**
   * @param key {String}
   * @param value {String|Number|Boolean}
   */
  setData (key, value) {
    this._data[key] = value
  }

  /**
   * @param key {String}
   * @return {String|Number|Boolean}
   */
  getData (key) {
    if (this.hasKey(key)) {
      return this._data[key]
    }
    return null
  }

  /**
   * @param key {String}
   * @return {Boolean}
   */
  hasKey (key) {
    return this._data[key] !== undefined
  }
}
