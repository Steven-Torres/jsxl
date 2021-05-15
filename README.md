# JSX-R

## Usage

1. Install with `npm`:

```sh
npm i jsx-r
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
				"importSource": "jsx-r/build"
			}
		]
	]
}
```

3. Define your components and render to the DOM:

```javascript
import { render } from 'jsx-r';

const MyComponent = props => {
	return <h1>Hello, {props.name}</h1>;
};
```
