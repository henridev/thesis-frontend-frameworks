import axios from "axios";
var service = axios.create({
  baseURL: "/api/todo",
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
  create: function create(title, completed) {
    return service.post("/", {
      title: title,
      completed: completed
    }).then(function (res) {
      return res.data.todo;
    }).catch(errHandler);
  },
  read: function read(_id) {
    return service.get("/".concat(_id)).then(function (res) {
      return res.data;
    }).catch(errHandler);
  },
  update: function update(_id) {
    var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    return service.put("/".concat(_id), {
      status: status,
      title: title
    }).then(function (res) {
      return res.data;
    }).catch(errHandler);
  },
  delete: function _delete(_id) {
    return service.delete("/".concat(_id)).then(function (res) {
      return res.data;
    }).catch(errHandler);
  },
  getAll: function getAll() {
    return service.get("/all").then(function (res) {
      return res.data;
    }).catch(errHandler);
  }
};