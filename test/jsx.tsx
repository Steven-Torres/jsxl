import { JSX, render } from '@jsxl/runtime';

interface ListItemProps extends JSX.Props {
	id: number | string;
}

const ListItem: JSX.FnComponent<ListItemProps> = ({ children, id }) => {
	return <li id={id}>{children}</li>;
};

const Anchor = ({ value }) => {
	return (
		<a href="#" data-value={value}>
			{value}
		</a>
	);
};

interface ListProps {
	items: number[];
}

const List: JSX.FnComponent<ListProps> = ({ items }) => {
	return (
		<ul class="list hello">
			{items.map((item: any, i: number) => (
				<ListItem id={i}>
					<Anchor value={item} />
				</ListItem>
			))}
		</ul>
	);
};

const App: JSX.FnComponent<any> = () => {
	return <List items={[1, 2, 3, 4, 5]} />;
};

render(<App />, document.body);

export default App;
