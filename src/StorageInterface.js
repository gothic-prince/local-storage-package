export default class StorageInterface {
  /**
   * @param key {String}
   * @param value {String|Number|Boolean}
   */
  setData (key, value) {}

  /**
   * @param key {String}
   * @return {String|Number|Boolean}
   */
  getData (key) {}

  /**
   * @param key {String}
   * @return {Boolean}
   */
  hasKey (key) {}
}
