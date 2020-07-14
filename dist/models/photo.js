"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var photoSchema = new _mongoose["default"].Schema({
  user: {
    type: Object,
    ref: "User",
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String
  }
}, {
  timestamps: true
});

var Photo = _mongoose["default"].model("Photo", photoSchema);

var _default = Photo;
exports["default"] = _default;