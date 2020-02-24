import * as React from "react";

// COMPONENTS //
import Button from './components/Button';

// CSS //
import "./assets/css/styles.css";


export default class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={'appContainer'}>
				<Button />
			</div>
		);
	}
}