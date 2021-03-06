// Currently disable Node rule since we don't want react as a dependency in our eslint-config-norton
// eslint-disable-next-line node/no-extraneous-import
import React from 'react';

type FooProps = React.HTMLAttributes<HTMLDivElement>;
interface FooState { isOpen: boolean; }

export class Foo extends React.Component<FooProps, FooState> {
	static defaultProps = {
		className: 'foo',
	};

	constructor(props: FooProps) {
		super(props);
		this.state = {
			isOpen: true,
		};
	}

	render(): JSX.Element {
		const { isOpen } = this.state;
		if (!isOpen) return null;
		const { className } = this.props;
		return (
			<div
				className={className}
			>
				foo
			</div>
		);
	}
}
