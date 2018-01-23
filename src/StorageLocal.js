import StorageInterface from './StorageInterface'
export default class StorageLocal extends StorageInterface {
  /**
   * @param key {String}
   * @param value {String|Number|Boolean}
   */
  setData (key, value) {
    localStorage.setItem(key, value)
  }

  /**
   * @param key {String}
   * @return {String|Number|Boolean}
   */
  getData (key) {
    return localStorage.getItem(key)
  }

  /**
   * @param key {String}
   * @return {Boolean}
   */
  hasKey (key) {
    return this.getData(key) !== null
  }
}
