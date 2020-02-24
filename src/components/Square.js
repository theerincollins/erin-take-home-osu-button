import * as React from "react";


export default class Square extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={'square'}>
				<div className={'innerSquare'}>
					0
				</div>
			</div>
		);
	}
}