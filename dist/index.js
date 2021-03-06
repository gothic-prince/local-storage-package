'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageMock = exports.StorageSimple = exports.StorageLocal = exports.StorageInterface = undefined;

var _StorageInterface = require('./StorageInterface');

var _StorageInterface2 = _interopRequireDefault(_StorageInterface);

var _StorageLocal = require('./StorageLocal');

var _StorageLocal2 = _interopRequireDefault(_StorageLocal);

var _StorageSimple = require('./StorageSimple');

var _StorageSimple2 = _interopRequireDefault(_StorageSimple);

var _StorageMock = require('./StorageMock');

var _StorageMock2 = _interopRequireDefault(_StorageMock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.StorageInterface = _StorageInterface2.default;
exports.StorageLocal = _StorageLocal2.default;
exports.StorageSimple = _StorageSimple2.default;
exports.StorageMock = _StorageMock2.default;