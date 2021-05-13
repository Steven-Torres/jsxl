import { render } from '../runtime/jsx-runtime';

const ListItem = ({ children, id }: any) => {
	return <li id={id}>{children}</li>;
};

const Anchor = ({ value }) => {
	return (
		<a href="#" data-value={value}>
			{value}
		</a>
	);
};

const List = ({ items }) => {
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

const App = () => {
	return <List items={[1, 2, 3, 4, 5]} />;
};

render(<App />, document.body);

export default App;
