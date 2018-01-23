'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StorageSimple = exports.StorageLocal = exports.StorageInterface = undefined;

var _StorageInterface = require('./StorageInterface');

var _StorageInterface2 = _interopRequireDefault(_StorageInterface);

var _StorageLocal = require('./StorageLocal');

var _StorageLocal2 = _interopRequireDefault(_StorageLocal);

var _StorageSimple = require('./StorageSimple');

var _StorageSimple2 = _interopRequireDefault(_StorageSimple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.StorageInterface = _StorageInterface2.default;
exports.StorageLocal = _StorageLocal2.default;
exports.StorageSimple = _StorageSimple2.default;