import StorageInterface from './StorageInterface'
import StorageSimple from './StorageSimple'
export default class StorageLocal extends StorageInterface {
  constructor() {
    super()
    /**
     * @type {StorageInterface}
     * @private
     */
    this._mock = new StorageSimple()
  }
  /**
   * @return {StorageInterface}
   */
  getStorage () {
    return this._mock
  }

  /**
   * @param key {String}
   * @param value {String|Number|Boolean}
   */
  setData (key, value) {
    if (localStorage) {
      localStorage.setItem(key, value)
    } else {
      this.getStorage().setData(key, value)
    }
  }

  /**
   * @param key {String}
   * @return {String|Number|Boolean}
   */
  getData (key) {
    if (localStorage) {
      return localStorage.getItem(key)
    } else {
      return this.getStorage().getData(key)
    }
  }

  /**
   * @param key {String}
   * @return {Boolean}
   */
  hasKey (key) {
    return this.getData(key) !== null
  }
}
