"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("./user"));

var _message = _interopRequireDefault(require("./message"));

var _photo = _interopRequireDefault(require("./photo"));

var _comment = _interopRequireDefault(require("./comment"));

var _follow = _interopRequireDefault(require("./follow"));

var _like = _interopRequireDefault(require("./like"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].set("useUnifiedTopology", true);

_mongoose["default"].set("useCreateIndex", true);

_mongoose["default"].set("useFindAndModify", false);

var connectDb = function connectDb() {
  return _mongoose["default"].connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
  });
};

exports.connectDb = connectDb;
var models = {
  User: _user["default"],
  Message: _message["default"],
  Photo: _photo["default"],
  Comment: _comment["default"],
  Like: _like["default"],
  Follow: _follow["default"]
};
var _default = models;
exports["default"] = _default;