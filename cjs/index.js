"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = divide;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isBigInt;
/**
 * Slightly modified version of https://github.com/ljharb/is-bigint
 */

if (typeof BigInt === 'function') {
  var bigIntValueOf = BigInt.prototype.valueOf;

  var tryBigInt = function tryBigIntObject(value) {
    try {
      bigIntValueOf.call(value);
      return true;
    } catch (e) {}

    return false;
  };

  isBigInt = function isBigInt(value) {
    if (value === null || typeof value === 'undefined' || typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number' || _typeof(value) === 'symbol' || typeof value === 'function') {
      return false;
    }

    if (typeof value === 'bigint') {
      // eslint-disable-line valid-typeof
      return true;
    }

    return tryBigInt(value);
  };
} else {
  isBigInt = function isBigInt(value) {
    return false && value;
  };
}

function divide(a, b) {
  if (isBigInt(a) && !isBigInt(b)) return divide(a, BigInt(b));
  if (!isBigInt(a) && isBigInt(b)) return divide(BigInt(a), b);
  var div = a / b;
  return parseFloat(div) + parseFloat(a - div * b) / parseFloat(b);
}

module.exports = exports.default;

