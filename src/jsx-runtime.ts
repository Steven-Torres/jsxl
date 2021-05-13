namespace JSX {
	export interface Element {
		type: string;
		props: any;
	}
}

const createTextElement = (text: string): JSX.Element => ({
	type: 'TEXT_ELEMENT',
	props: {
		nodeValue: text,
		children: [],
	},
});

export const jsx = (type: string | Function, config: any) => {
	if (typeof type === 'function') {
		return type(config);
	}

	const { children = [], ...props } = config;
	const childrenProps = [].concat(children);

	return {
		type,
		props: {
			...props,
			children: childrenProps.map(child =>
				typeof child === 'object' ? child : createTextElement(child)
			),
		},
	};
};

export const jsxs = (type: string | Function, config: any) => jsx(type, config);

export const render = (element: JSX.Element, container) => {
	const dom =
		element.type === 'TEXT_ELEMENT'
			? container.ownerDocument.createTextNode('')
			: container.ownerDocument.createElement(element.type);

	const isProperty = (key: string) => key !== 'children';
	const isAttribute = (str: string) => /aria-.*|data-.*/.test(str);

	Object.keys(element.props)
		.filter(isProperty)
		.forEach(name => {
			if (isAttribute(name)) {
				dom.setAttribute(name, element.props[name]);
				return;
			}
			const domName = name === 'class' ? 'className' : name;
			dom[domName] = element.props[name];
		});

	element.props.children.forEach(child => render(child, dom));
	container.append(dom);
	return container;
};
