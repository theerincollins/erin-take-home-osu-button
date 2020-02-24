import * as React from "react";


export default class Circle extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={'circle'}>
				<div className={'innerCircle'}>
					0
				</div>
			</div>
		);
	}
}