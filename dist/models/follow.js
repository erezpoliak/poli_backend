"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var followSchema = new _mongoose["default"].Schema({
  user: {
    type: Object,
    ref: "User"
  },
  followingUser: {
    type: Object,
    ref: "User"
  }
});

var Follow = _mongoose["default"].model("Follow", followSchema);

var _default = Follow;
exports["default"] = _default;