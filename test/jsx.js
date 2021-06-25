"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _runtime = require("@jsxl/runtime");

var _jsxRuntime = require("@jsxl/runtime/build/jsx-runtime");

var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      id = _ref.id;
  return (0, _jsxRuntime.jsx)("li", {
    id: id,
    children: children
  });
};

var Anchor = function Anchor(_ref2) {
  var value = _ref2.value;
  return (0, _jsxRuntime.jsx)("a", {
    href: "#",
    "data-value": value,
    children: value
  });
};

var List = function List(_ref3) {
  var items = _ref3.items;
  return (0, _jsxRuntime.jsx)("ul", {
    "class": "list hello",
    children: items.map(function (item, i) {
      return (0, _jsxRuntime.jsx)(ListItem, {
        id: i,
        children: (0, _jsxRuntime.jsx)(Anchor, {
          value: item
        })
      });
    })
  });
};

var App = function App() {
  return (0, _jsxRuntime.jsx)(List, {
    items: [1, 2, 3, 4, 5]
  });
};

(0, _runtime.render)((0, _jsxRuntime.jsx)(App, {}), document.body);
var _default = App;
exports["default"] = _default;