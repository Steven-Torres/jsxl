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

	let elChildren: JSX.Element[];

	if (Array.isArray(children)) {
		elChildren = children;
	} else if (typeof children === 'string') {
		elChildren = [createTextElement(children)];
	} else {
		elChildren = [children];
	}

	return {
		type,
		props: {
			...props,
			children: elChildren,
		},
	};
};

export const render = (element: JSX.Element, container: Element) => {
	const node = getDomNode(element, container);
	console.log(element);
	assignProps(node, element.props);

	if (node instanceof Element && Array.isArray(element.props.children)) {
		element.props.children.forEach(child => render(child, node));
	}

	container.append(node);
	return container;
};

export { jsx as jsxs, JSX };
