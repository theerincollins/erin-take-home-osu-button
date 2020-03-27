import * as React from "react";


export default class Button extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={'button'}>
				<div className={'circle'} style={{marginRight: '32px'}}/>
				Button
				<div className={'circle'} style={{marginLeft: '30px'}}/>
			</div>
		);
	}
}