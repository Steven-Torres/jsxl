"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("../build/jsx-runtime.js");

var _jsxRuntime2 = require("@jsxl/runtime/build/jsx-runtime");

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      id = _ref.id;
  return (0, _jsxRuntime2.jsx)("li", {
    id: id,
    children: children
  });
};

var Anchor = function Anchor(_ref2) {
  var value = _ref2.value;
  return (0, _jsxRuntime2.jsx)("a", {
    href: "#",
    "data-value": value,
    children: value
  });
};

var List = function List(_ref3) {
  var items = _ref3.items;
  return (0, _jsxRuntime2.jsx)("ul", {
    "class": "list hello",
    children: items.map(function (item, i) {
      return (0, _jsxRuntime2.jsx)(ListItem, {
        id: i,
        children: (0, _jsxRuntime2.jsx)(Anchor, {
          value: item
        })
      });
    })
  });
};

var App = function App() {
  return (0, _jsxRuntime2.jsx)(List, {
    items: [1, 2, 3, 4, 5]
  });
};

(0, _jsxRuntime.render)((0, _jsxRuntime2.jsx)(App, {}), document.body);
var _default = App;
exports["default"] = _default;

var test = function test() {
  return (0, _jsxRuntime2.jsx)("h1", {});
};
