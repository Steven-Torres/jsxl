import { JSX } from './@types/jsx';

export const createTextElement = (text: string): JSX.Element => ({
	type: 'TEXT_ELEMENT',
	props: {
		nodeValue: text,
		children: [],
	},
});

export const isProperty = (key: string) => key !== 'children';

export const isAttribute = (str: string) => /aria-.*|data-.*/.test(str);

export const getDomNode = (element: JSX.Element, container: Element) => {
	return element.type === 'TEXT_ELEMENT'
		? container.ownerDocument.createTextNode('')
		: container.ownerDocument.createElement(element.type);
};

export const assignProps = (node: HTMLElement | Text, props: JSX.Props) => {
	Object.keys(props)
		.filter(isProperty)
		.forEach(name => {
			if (isAttribute(name) && node instanceof HTMLElement) {
				node.setAttribute(name, props[name]);
				return;
			}
			const nodeName = name === 'class' ? 'className' : name;
			(node as Record<string, any>)[nodeName] = props[name];
		});
};
