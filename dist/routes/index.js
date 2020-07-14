"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _message = _interopRequireDefault(require("./message"));

var _user = _interopRequireDefault(require("./user"));

var _photo = _interopRequireDefault(require("./photo"));

var _comment = _interopRequireDefault(require("./comment"));

var _like = _interopRequireDefault(require("./like"));

var _follow = _interopRequireDefault(require("./follow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  message: _message["default"],
  user: _user["default"],
  photo: _photo["default"],
  comment: _comment["default"],
  like: _like["default"],
  follow: _follow["default"]
};
exports["default"] = _default;