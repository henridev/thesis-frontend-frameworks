import axios from "axios";
var service = axios.create({
  baseURL: "/api/authorization",
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

export default {
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