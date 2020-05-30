"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Todo;

var _react = _interopRequireWildcard(require("react"));

require("../styles/todo.css");

var _todo2 = _interopRequireDefault(require("../api/todo"));

var _Add = _interopRequireDefault(require("../components/Add"));

var _Item = _interopRequireDefault(require("../components/Item"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Todo(_ref) {
  var username = _ref.username;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      todos = _useState2[0],
      settodos = _useState2[1];

  (0, _react.useEffect)(function () {
    var res = _todo2.default.getAll().then(function (_todos) {
      console.log("_todos", _todos);
      settodos(_todos.todos);
    });

    return function () {};
  }, []);

  function handleDelete(id) {
    console.log("id", id);

    _todo2.default.delete(id).then(function (res) {
      console.log("delete done", res);
      settodos(todos.filter(function (todo) {
        return todo._id !== id;
      }));
    });
  }

  function handleStatusChange(id, status) {
    settodos(todos.map(function (todo) {
      if (todo._id === id) todo.completed = !todo.completed;
      return todo;
    }));

    _todo2.default.update(id, status, "").then(function (res) {
      console.log("status change done", res);
    });
  }

  function handleTitleChange(id, title) {
    settodos(todos.map(function (todo) {
      if (todo._id === id) todo.title = title;
      return todo;
    }));

    _todo2.default.update(id, "", title).then(function (res) {
      console.log("title change done", res);
    });
  }

  function handleCreation(title) {
    _todo2.default.create(title).then(function (res) {
      var newest = _toConsumableArray(todos);

      newest.push(res);
      settodos(newest);
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "card",
    style: {
      width: "30rem"
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-header background-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-group"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "list-group-item active"
  }, "Hello ", username, " these are your todos for today"), /*#__PURE__*/_react.default.createElement("span", {
    className: "todo-items"
  }, todos.map(function (todo) {
    return /*#__PURE__*/_react.default.createElement(_Item.default, {
      key: todo._id,
      id: todo._id,
      isComplete: todo.completed,
      title: todo.title,
      handleDelete: handleDelete,
      handleStatusChange: handleStatusChange,
      handleTitleChange: handleTitleChange
    });
  })), /*#__PURE__*/_react.default.createElement(_Add.default, {
    handleCreation: handleCreation
  }))));
}