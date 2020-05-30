"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigation(_ref) {
  var user = _ref.user,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light fixed-top"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-clipboard-list"
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarTogglerDemo02",
    "aria-controls": "navbarTogglerDemo02",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarTogglerDemo02"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav mr-auto mt-2 mt-lg-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item active"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "link nav-link",
    to: "/"
  }, "home")), user && /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "link nav-link",
    to: "/todos"
  }, "todos"))), !user && /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary my-2 my-sm-0",
    type: "submit"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "link nav-link",
    style: {
      color: "white"
    },
    to: "/authorization"
  }, "sign in / log in")), children));
}