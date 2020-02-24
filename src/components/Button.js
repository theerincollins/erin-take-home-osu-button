import * as React from "react";


export default class Button extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={'button'}>
				<div className={'circle'}/>
				Button
				<div className={'circle'}/>
			</div>
		);
	}
}