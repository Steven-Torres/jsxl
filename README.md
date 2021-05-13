# Jsxify

## Usage

The only way to include this package currently is by including this script tag in your `index.html`:

```html
<script src="https://cdn.jsdelivr.net/gh/Steven-Torres/jsxify@main/runtime/jsx-runtime.js"></script>
```

From there you can use it along with babel by specifying a babel pragma:

```javascript
/** @jsx jsx */

const MyComponent = props => {
	return <h1>Hello, {props.name}</h1>;
};
```
