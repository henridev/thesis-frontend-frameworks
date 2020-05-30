"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Home() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "about",
    style: {
      padding: "20px",
      backgroundColor: "#007bff",
      color: "white",
      borderRadius: "0.25rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "inner-about"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "React todo app"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, "Welcome to the react version of your favourite todo app")));
}