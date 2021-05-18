import { JSX } from './@types/jsx';
import { assignProps, createTextElement, getDomNode } from './utils';

export const jsx = (
	type: string | Function,
	config: { children?: JSX.Element | JSX.Element[] | string }
): JSX.Element => {
	if (typeof type === 'function') {
		return type(config);
	}

	const { children = [], ...props } = config;

	const childrenProps = Array.isArray(children)
		? children
		: typeof children === 'object'
		? [children]
		: [createTextElement(children)];

	return {
		type,
		props: {
			...props,
			children: childrenProps,
		},
	};
};

export const render = (element: JSX.Element, container: Element) => {
	const node = getDomNode(element, container);

	assignProps(node, element.props);

	if (node instanceof Element && Array.isArray(element.props.children)) {
		element.props.children.forEach(child => render(child, node));
	}

	container.append(node);
	return container;
};

export { jsx as jsxs, JSX };
