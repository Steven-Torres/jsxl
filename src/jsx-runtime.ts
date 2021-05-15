export namespace JSX {
	export interface Props {
		[prop: string]: any;
		children?: JSX.Element[];
	}

	export interface Element {
		type: string;
		props: JSX.Props;
	}

	export interface FnComponent<P extends JSX.Props> {
		(props: P): JSX.Element;
	}
}

const createTextElement = (text: string): JSX.Element => ({
	type: 'TEXT_ELEMENT',
	props: {
		nodeValue: text,
		children: [],
	},
});

export const jsx = (type: string | Function, config: JSX.Props) => {
	if (typeof type === 'function') {
		return type(config);
	}

	const { children = [], ...props } = config;

	return {
		type,
		props: {
			...props,
			children: children.map(child =>
				typeof child === 'object' ? child : createTextElement(child)
			),
		},
	};
};

export const jsxs = (type: string | Function, config: any) => jsx(type, config);

export const render = (element: JSX.Element, container: Element) => {
	const dom =
		element.type === 'TEXT_ELEMENT'
			? container.ownerDocument.createTextNode('')
			: container.ownerDocument.createElement(element.type);

	const isProperty = (key: string) => key !== 'children';
	const isAttribute = (str: string) => /aria-.*|data-.*/.test(str);

	Object.keys(element.props)
		.filter(isProperty)
		.forEach(name => {
			if (isAttribute(name) && dom instanceof HTMLElement) {
				dom.setAttribute(name, element.props[name]);
				return;
			}
			const domName = name === 'class' ? 'className' : name;
			(dom as Record<string, any>)[domName] = element.props[name];
		});

	if (dom instanceof Element && element.props.children) {
		element.props.children.forEach((child: JSX.Element) => render(child, dom));
	}
	container.append(dom);
	return container;
};
