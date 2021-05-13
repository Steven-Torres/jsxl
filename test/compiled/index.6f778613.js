(function () {
  // ASSET: test/jsx.tsx
  var $c9fa4659fda80cb0e4004a5818abde14$exports = {};
  Object.defineProperty($c9fa4659fda80cb0e4004a5818abde14$exports, "__esModule", {
    value: true
  });
  var $c9fa4659fda80cb0e4004a5818abde14$export$default = void 0;
  $c9fa4659fda80cb0e4004a5818abde14$exports["default"] = $c9fa4659fda80cb0e4004a5818abde14$export$default;
  // ASSET: runtime/jsx-runtime.js
  var $748c8476c033a471f619a4894f7f8402$exports = {};
  Object.defineProperty($748c8476c033a471f619a4894f7f8402$exports, "__esModule", {
    value: true
  });
  var $748c8476c033a471f619a4894f7f8402$export$render = ($748c8476c033a471f619a4894f7f8402$export$jsxs = ($748c8476c033a471f619a4894f7f8402$export$jsx = void 0, $748c8476c033a471f619a4894f7f8402$exports.jsx = $748c8476c033a471f619a4894f7f8402$export$jsx), $748c8476c033a471f619a4894f7f8402$exports.jsxs = $748c8476c033a471f619a4894f7f8402$export$jsxs);
  $748c8476c033a471f619a4894f7f8402$exports.render = $748c8476c033a471f619a4894f7f8402$export$render;
  function $748c8476c033a471f619a4894f7f8402$var$_typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      $748c8476c033a471f619a4894f7f8402$var$_typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      $748c8476c033a471f619a4894f7f8402$var$_typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return $748c8476c033a471f619a4894f7f8402$var$_typeof(obj);
  }
  function $748c8476c033a471f619a4894f7f8402$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function $748c8476c033a471f619a4894f7f8402$var$_objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        $748c8476c033a471f619a4894f7f8402$var$ownKeys(Object(source), true).forEach(function (key) {
          $748c8476c033a471f619a4894f7f8402$var$_defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        $748c8476c033a471f619a4894f7f8402$var$ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function $748c8476c033a471f619a4894f7f8402$var$_defineProperty(obj, key, value) {
    if ((key in obj)) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function $748c8476c033a471f619a4894f7f8402$var$_objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = $748c8476c033a471f619a4894f7f8402$var$_objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function $748c8476c033a471f619a4894f7f8402$var$_objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }
  var $748c8476c033a471f619a4894f7f8402$var$JSX;
  (function (_JSX) {})($748c8476c033a471f619a4894f7f8402$var$JSX || ($748c8476c033a471f619a4894f7f8402$var$JSX = {}));
  var $748c8476c033a471f619a4894f7f8402$var$createTextElement = function createTextElement(text) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: text,
        children: []
      }
    };
  };
  var $748c8476c033a471f619a4894f7f8402$var$jsx = function jsx(type, config) {
    if (typeof type === 'function') {
      return type(config);
    }
    var _config$children = config.children, children = _config$children === void 0 ? [] : _config$children, props = $748c8476c033a471f619a4894f7f8402$var$_objectWithoutProperties(config, ["children"]);
    var childrenProps = [].concat(children);
    return {
      type: type,
      props: $748c8476c033a471f619a4894f7f8402$var$_objectSpread($748c8476c033a471f619a4894f7f8402$var$_objectSpread({}, props), {}, {
        children: childrenProps.map(function (child) {
          return $748c8476c033a471f619a4894f7f8402$var$_typeof(child) === 'object' ? child : $748c8476c033a471f619a4894f7f8402$var$createTextElement(child);
        })
      })
    };
  };
  var $748c8476c033a471f619a4894f7f8402$export$jsx = $748c8476c033a471f619a4894f7f8402$var$jsx;
  $748c8476c033a471f619a4894f7f8402$exports.jsx = $748c8476c033a471f619a4894f7f8402$export$jsx;
  var $748c8476c033a471f619a4894f7f8402$var$jsxs = function jsxs(type, config) {
    return $748c8476c033a471f619a4894f7f8402$var$jsx(type, config);
  };
  var $748c8476c033a471f619a4894f7f8402$export$jsxs = $748c8476c033a471f619a4894f7f8402$var$jsxs;
  $748c8476c033a471f619a4894f7f8402$exports.jsxs = $748c8476c033a471f619a4894f7f8402$export$jsxs;
  var $748c8476c033a471f619a4894f7f8402$var$render = function render(element, container) {
    var dom = element.type === 'TEXT_ELEMENT' ? container.ownerDocument.createTextNode('') : container.ownerDocument.createElement(element.type);
    var isProperty = function isProperty(key) {
      return key !== 'children';
    };
    var isAttribute = function isAttribute(str) {
      return (/aria-.*|data-.*/).test(str);
    };
    Object.keys(element.props).filter(isProperty).forEach(function (name) {
      if (isAttribute(name)) {
        dom.setAttribute(name, element.props[name]);
        return;
      }
      var domName = name === 'class' ? 'className' : name;
      dom[domName] = element.props[name];
    });
    element.props.children.forEach(function (child) {
      return render(child, dom);
    });
    container.append(dom);
    return container;
  };
  $748c8476c033a471f619a4894f7f8402$export$render = $748c8476c033a471f619a4894f7f8402$var$render;
  $748c8476c033a471f619a4894f7f8402$exports.render = $748c8476c033a471f619a4894f7f8402$export$render;
  var $c9fa4659fda80cb0e4004a5818abde14$var$ListItem = function ListItem(_ref) {
    var children = _ref.children, id = _ref.id;
    return (0, $748c8476c033a471f619a4894f7f8402$exports.jsx)("li", {
      id: id,
      children: children
    });
  };
  var $c9fa4659fda80cb0e4004a5818abde14$var$Anchor = function Anchor(_ref2) {
    var value = _ref2.value;
    return (0, $748c8476c033a471f619a4894f7f8402$exports.jsx)("a", {
      href: "#",
      "data-value": value,
      children: value
    });
  };
  var $c9fa4659fda80cb0e4004a5818abde14$var$List = function List(_ref3) {
    var items = _ref3.items;
    return (0, $748c8476c033a471f619a4894f7f8402$exports.jsx)("ul", {
      "class": "list hello",
      children: items.map(function (item, i) {
        return (0, $748c8476c033a471f619a4894f7f8402$exports.jsx)($c9fa4659fda80cb0e4004a5818abde14$var$ListItem, {
          id: i,
          children: (0, $748c8476c033a471f619a4894f7f8402$exports.jsx)($c9fa4659fda80cb0e4004a5818abde14$var$Anchor, {
            value: item
          })
        });
      })
    });
  };
  var $c9fa4659fda80cb0e4004a5818abde14$var$App = function App() {
    return (0, $748c8476c033a471f619a4894f7f8402$exports.jsx)($c9fa4659fda80cb0e4004a5818abde14$var$List, {
      items: [1, 2, 3, 4, 5]
    });
  };
  (0, $748c8476c033a471f619a4894f7f8402$exports.render)((0, $748c8476c033a471f619a4894f7f8402$exports.jsx)($c9fa4659fda80cb0e4004a5818abde14$var$App, {}), document.body);
  var $c9fa4659fda80cb0e4004a5818abde14$var$_default = $c9fa4659fda80cb0e4004a5818abde14$var$App;
  $c9fa4659fda80cb0e4004a5818abde14$export$default = $c9fa4659fda80cb0e4004a5818abde14$var$_default;
  $c9fa4659fda80cb0e4004a5818abde14$exports["default"] = $c9fa4659fda80cb0e4004a5818abde14$export$default;
})();

//# sourceMappingURL=index.6f778613.js.map
