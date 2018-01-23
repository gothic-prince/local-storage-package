"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StorageInterface = function () {
  function StorageInterface() {
    _classCallCheck(this, StorageInterface);
  }

  _createClass(StorageInterface, [{
    key: "setData",

    /**
     * @param key {String}
     * @param value {String|Number|Boolean}
     */
    value: function setData(key, value) {}

    /**
     * @param key {String}
     * @return {String|Number|Boolean}
     */

  }, {
    key: "getData",
    value: function getData(key) {}

    /**
     * @param key {String}
     * @return {Boolean}
     */

  }, {
    key: "hasKey",
    value: function hasKey(key) {}
  }]);

  return StorageInterface;
}();

exports.default = StorageInterface;