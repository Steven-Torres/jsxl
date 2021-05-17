export namespace JSX {
	export interface Props {
		[prop: string]: any;
		children?: Element[] | Element;
	}

	export interface Element {
		type: string;
		props: Props;
	}

	export interface FnComponent<P extends Props> {
		(props: P): Element;
	}
}
