# JSXL (Javascript XML as a Language)

## Usage

1. Install with `npm`:

```sh
npm i @jsxl/runtime
```

2. Install `babel` along with the `@babel/plugin-transform-react-jsx` plugin.

`.babelrc`:

```json
{
	"presets": ["@babel/preset-env"],
	"plugins": [
		[
			"@babel/plugin-transform-react-jsx",
			{
				"runtime": "automatic",
				"importSource": "@jsxl/runtime/build"
			}
		]
	]
}
```

3. Define your components and render to the DOM:

```javascript
import { render } from 'jsxl';

const MyComponent = props => {
	return <h1>Hello, {props.name}</h1>;
};

render(<MyComponent />, document.body);
```
