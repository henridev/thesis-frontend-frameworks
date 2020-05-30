"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(process.env.NODE_ENV);

var service = _axios.default.create({
  baseURL: process.env.NODE_ENV === "production" ? "/api/authorization" : "http://".concat(window.location.hostname, ":5000/api/authorization"),
  withCredentials: true
});

var errHandler = function errHandler(err) {
  console.error(err);

  if (err.response && err.response.data) {
    console.error("API response", err.response.data);
    throw err.response.data.message;
  }

  throw err;
};

var _default = {
  service: service,
  login: function login(email, password) {
    return service.post("/login", {
      email: email,
      password: password
    }).then(function (res) {
      return res.data.user;
    }).catch(errHandler);
  },
  signup: function signup(name, email, password) {
    return service.post("/signup", {
      name: name,
      email: email,
      password: password
    }).then(function (res) {
      return res.data.user;
    }).catch(errHandler);
  }
};
exports.default = _default;