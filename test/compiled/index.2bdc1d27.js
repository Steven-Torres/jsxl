(function () {
  // ASSET: jsx.tsx
  var $90e06520754c3cbef317c1919919af62$exports = {};
  Object.defineProperty($90e06520754c3cbef317c1919919af62$exports, "__esModule", {
    value: true
  });
  var $90e06520754c3cbef317c1919919af62$export$default = void 0;
  $90e06520754c3cbef317c1919919af62$exports["default"] = $90e06520754c3cbef317c1919919af62$export$default;
  // ASSET: ../build/jsx-runtime.js
  var $5508529d46bfdb83a9614c9ae4fe2036$exports = {};
  var $5508529d46bfdb83a9614c9ae4fe2036$var$__assign = $5508529d46bfdb83a9614c9ae4fe2036$exports && $5508529d46bfdb83a9614c9ae4fe2036$exports.__assign || (function () {
    $5508529d46bfdb83a9614c9ae4fe2036$var$__assign = Object.assign || (function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return $5508529d46bfdb83a9614c9ae4fe2036$var$__assign.apply(this, arguments);
  });
  var $5508529d46bfdb83a9614c9ae4fe2036$var$__rest = $5508529d46bfdb83a9614c9ae4fe2036$exports && $5508529d46bfdb83a9614c9ae4fe2036$exports.__rest || (function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  });
  Object.defineProperty($5508529d46bfdb83a9614c9ae4fe2036$exports, "__esModule", {
    value: true
  });
  var $5508529d46bfdb83a9614c9ae4fe2036$export$jsxs = ($5508529d46bfdb83a9614c9ae4fe2036$export$render = ($5508529d46bfdb83a9614c9ae4fe2036$export$jsx = void 0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx = $5508529d46bfdb83a9614c9ae4fe2036$export$jsx), $5508529d46bfdb83a9614c9ae4fe2036$exports.render = $5508529d46bfdb83a9614c9ae4fe2036$export$render);
  $5508529d46bfdb83a9614c9ae4fe2036$exports.jsxs = $5508529d46bfdb83a9614c9ae4fe2036$export$jsxs;
  // ASSET: ../build/utils.js
  var $789ffbf78168b636875d87a2aa597eb2$exports = {};
  Object.defineProperty($789ffbf78168b636875d87a2aa597eb2$exports, "__esModule", {
    value: true
  });
  var $789ffbf78168b636875d87a2aa597eb2$export$assignProps = ($789ffbf78168b636875d87a2aa597eb2$export$getDomNode = ($789ffbf78168b636875d87a2aa597eb2$export$isAttribute = ($789ffbf78168b636875d87a2aa597eb2$export$isProperty = ($789ffbf78168b636875d87a2aa597eb2$export$createTextElement = void 0, $789ffbf78168b636875d87a2aa597eb2$exports.createTextElement = $789ffbf78168b636875d87a2aa597eb2$export$createTextElement), $789ffbf78168b636875d87a2aa597eb2$exports.isProperty = $789ffbf78168b636875d87a2aa597eb2$export$isProperty), $789ffbf78168b636875d87a2aa597eb2$exports.isAttribute = $789ffbf78168b636875d87a2aa597eb2$export$isAttribute), $789ffbf78168b636875d87a2aa597eb2$exports.getDomNode = $789ffbf78168b636875d87a2aa597eb2$export$getDomNode);
  $789ffbf78168b636875d87a2aa597eb2$exports.assignProps = $789ffbf78168b636875d87a2aa597eb2$export$assignProps;
  var $789ffbf78168b636875d87a2aa597eb2$var$createTextElement = function (text) {
    return {
      type: 'TEXT_ELEMENT',
      props: {
        nodeValue: text,
        children: []
      }
    };
  };
  var $789ffbf78168b636875d87a2aa597eb2$export$createTextElement = $789ffbf78168b636875d87a2aa597eb2$var$createTextElement;
  $789ffbf78168b636875d87a2aa597eb2$exports.createTextElement = $789ffbf78168b636875d87a2aa597eb2$export$createTextElement;
  var $789ffbf78168b636875d87a2aa597eb2$var$isProperty = function (key) {
    return key !== 'children';
  };
  var $789ffbf78168b636875d87a2aa597eb2$export$isProperty = $789ffbf78168b636875d87a2aa597eb2$var$isProperty;
  $789ffbf78168b636875d87a2aa597eb2$exports.isProperty = $789ffbf78168b636875d87a2aa597eb2$export$isProperty;
  var $789ffbf78168b636875d87a2aa597eb2$var$isAttribute = function (str) {
    return (/aria-.*|data-.*/).test(str);
  };
  var $789ffbf78168b636875d87a2aa597eb2$export$isAttribute = $789ffbf78168b636875d87a2aa597eb2$var$isAttribute;
  $789ffbf78168b636875d87a2aa597eb2$exports.isAttribute = $789ffbf78168b636875d87a2aa597eb2$export$isAttribute;
  var $789ffbf78168b636875d87a2aa597eb2$var$getDomNode = function (element, container) {
    return element.type === 'TEXT_ELEMENT' ? container.ownerDocument.createTextNode('') : container.ownerDocument.createElement(element.type);
  };
  var $789ffbf78168b636875d87a2aa597eb2$export$getDomNode = $789ffbf78168b636875d87a2aa597eb2$var$getDomNode;
  $789ffbf78168b636875d87a2aa597eb2$exports.getDomNode = $789ffbf78168b636875d87a2aa597eb2$export$getDomNode;
  var $789ffbf78168b636875d87a2aa597eb2$var$assignProps = function (node, props) {
    Object.keys(props).filter($789ffbf78168b636875d87a2aa597eb2$export$isProperty).forEach(function (name) {
      if ($789ffbf78168b636875d87a2aa597eb2$export$isAttribute(name) && node instanceof HTMLElement) {
        node.setAttribute(name, props[name]);
        return;
      }
      var nodeName = name === 'class' ? 'className' : name;
      node[nodeName] = props[name];
    });
  };
  $789ffbf78168b636875d87a2aa597eb2$export$assignProps = $789ffbf78168b636875d87a2aa597eb2$var$assignProps;
  $789ffbf78168b636875d87a2aa597eb2$exports.assignProps = $789ffbf78168b636875d87a2aa597eb2$export$assignProps;
  var $5508529d46bfdb83a9614c9ae4fe2036$var$jsx = function (type, config) {
    if (typeof type === 'function') {
      return type(config);
    }
    var _a = config.children, children = _a === void 0 ? [] : _a, props = $5508529d46bfdb83a9614c9ae4fe2036$var$__rest(config, ["children"]);
    var elChildren;
    if (Array.isArray(children)) {
      elChildren = children;
    } else if (typeof children === 'string') {
      elChildren = [$789ffbf78168b636875d87a2aa597eb2$exports.createTextElement(children)];
    } else {
      elChildren = [children];
    }
    return {
      type: type,
      props: $5508529d46bfdb83a9614c9ae4fe2036$var$__assign($5508529d46bfdb83a9614c9ae4fe2036$var$__assign({}, props), {
        children: elChildren
      })
    };
  };
  var $5508529d46bfdb83a9614c9ae4fe2036$export$jsx = $5508529d46bfdb83a9614c9ae4fe2036$var$jsx;
  $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx = $5508529d46bfdb83a9614c9ae4fe2036$export$jsx;
  $5508529d46bfdb83a9614c9ae4fe2036$export$jsxs = $5508529d46bfdb83a9614c9ae4fe2036$export$jsx;
  $5508529d46bfdb83a9614c9ae4fe2036$exports.jsxs = $5508529d46bfdb83a9614c9ae4fe2036$export$jsxs;
  var $5508529d46bfdb83a9614c9ae4fe2036$var$render = function (element, container) {
    var node = $789ffbf78168b636875d87a2aa597eb2$exports.getDomNode(element, container);
    $789ffbf78168b636875d87a2aa597eb2$exports.assignProps(node, element.props);
    if (node instanceof Element && Array.isArray(element.props.children)) {
      element.props.children.forEach(function (child) {
        return $5508529d46bfdb83a9614c9ae4fe2036$export$render(child, node);
      });
    }
    container.append(node);
    return container;
  };
  var $5508529d46bfdb83a9614c9ae4fe2036$export$render = $5508529d46bfdb83a9614c9ae4fe2036$var$render;
  $5508529d46bfdb83a9614c9ae4fe2036$exports.render = $5508529d46bfdb83a9614c9ae4fe2036$export$render;
  var $90e06520754c3cbef317c1919919af62$var$ListItem = function ListItem(_ref) {
    var children = _ref.children, id = _ref.id;
    return (0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx)("li", {
      id: id,
      children: children
    });
  };
  var $90e06520754c3cbef317c1919919af62$var$Anchor = function Anchor(_ref2) {
    var value = _ref2.value;
    return (0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx)("a", {
      href: "#",
      "data-value": value,
      children: value
    });
  };
  var $90e06520754c3cbef317c1919919af62$var$List = function List(_ref3) {
    var items = _ref3.items;
    return (0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx)("ul", {
      "class": "list hello",
      children: items.map(function (item, i) {
        return (0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx)($90e06520754c3cbef317c1919919af62$var$ListItem, {
          id: i,
          children: (0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx)($90e06520754c3cbef317c1919919af62$var$Anchor, {
            value: item
          })
        });
      })
    });
  };
  var $90e06520754c3cbef317c1919919af62$var$App = function App() {
    return (0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx)($90e06520754c3cbef317c1919919af62$var$List, {
      items: [1, 2, 3, 4, 5]
    });
  };
  (0, $5508529d46bfdb83a9614c9ae4fe2036$exports.render)((0, $5508529d46bfdb83a9614c9ae4fe2036$exports.jsx)($90e06520754c3cbef317c1919919af62$var$App, {}), document.body);
  var $90e06520754c3cbef317c1919919af62$var$_default = $90e06520754c3cbef317c1919919af62$var$App;
  $90e06520754c3cbef317c1919919af62$export$default = $90e06520754c3cbef317c1919919af62$var$_default;
  $90e06520754c3cbef317c1919919af62$exports["default"] = $90e06520754c3cbef317c1919919af62$export$default;
})();

//# sourceMappingURL=index.2bdc1d27.js.map
