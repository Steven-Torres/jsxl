# JSXL (Javascript XML as a Language)

## Important Note:

This package is not yet production ready. That said, if there are any features that you would like to see in a JSX runtime or that you think would make this package awesome, please feel free to make an issue. The idea is in as much development as the project itself, so all suggestions are welcome!

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
import { render } from '@jsxl/runtime';

const MyComponent = props => {
	return <h1>Hello, {props.name}</h1>;
};

render(<MyComponent />, document.body);
```
