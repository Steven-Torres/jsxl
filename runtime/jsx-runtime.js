"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.jsxs = exports.jsx = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var JSX;

(function (_JSX) {})(JSX || (JSX = {}));

var createTextElement = function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  };
};

var jsx = function jsx(type, config) {
  if (typeof type === 'function') {
    return type(config);
  }

  var _config$children = config.children,
      children = _config$children === void 0 ? [] : _config$children,
      props = _objectWithoutProperties(config, ["children"]);

  var childrenProps = [].concat(children);
  return {
    type: type,
    props: _objectSpread(_objectSpread({}, props), {}, {
      children: childrenProps.map(function (child) {
        return _typeof(child) === 'object' ? child : createTextElement(child);
      })
    })
  };
};

exports.jsx = jsx;

var jsxs = function jsxs(type, config) {
  return jsx(type, config);
};

exports.jsxs = jsxs;

var render = function render(element, container) {
  var dom = element.type === 'TEXT_ELEMENT' ? container.ownerDocument.createTextNode('') : container.ownerDocument.createElement(element.type);

  var isProperty = function isProperty(key) {
    return key !== 'children';
  };

  var isAttribute = function isAttribute(str) {
    return /aria-.*|data-.*/.test(str);
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

exports.render = render;
