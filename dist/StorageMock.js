'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StorageSimple2 = require('./StorageSimple');

var _StorageSimple3 = _interopRequireDefault(_StorageSimple2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StorageMock = function (_StorageSimple) {
  _inherits(StorageMock, _StorageSimple);

  function StorageMock() {
    _classCallCheck(this, StorageMock);

    return _possibleConstructorReturn(this, (StorageMock.__proto__ || Object.getPrototypeOf(StorageMock)).apply(this, arguments));
  }

  return StorageMock;
}(_StorageSimple3.default);

exports.default = StorageMock;