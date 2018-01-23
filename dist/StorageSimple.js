'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StorageInterface2 = require('./StorageInterface');

var _StorageInterface3 = _interopRequireDefault(_StorageInterface2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StorageSimple = function (_StorageInterface) {
  _inherits(StorageSimple, _StorageInterface);

  function StorageSimple() {
    _classCallCheck(this, StorageSimple);

    /**
     * @private
     */
    var _this = _possibleConstructorReturn(this, (StorageSimple.__proto__ || Object.getPrototypeOf(StorageSimple)).call(this));

    _this._data = {};
    return _this;
  }

  /**
   * @param key {String}
   * @param value {String|Number|Boolean}
   */


  _createClass(StorageSimple, [{
    key: 'setData',
    value: function setData(key, value) {
      this._data[key] = value;
    }

    /**
     * @param key {String}
     * @return {String|Number|Boolean}
     */

  }, {
    key: 'getData',
    value: function getData(key) {
      if (this.hasKey(key)) {
        return this._data[key];
      }
      return null;
    }

    /**
     * @param key {String}
     * @return {Boolean}
     */

  }, {
    key: 'hasKey',
    value: function hasKey(key) {
      return this._data[key] !== undefined;
    }
  }]);

  return StorageSimple;
}(_StorageInterface3.default);

exports.default = StorageSimple;