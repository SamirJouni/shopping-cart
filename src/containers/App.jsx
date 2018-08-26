import React, { Component } from "react";
import Counters from "../components/Counters";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			counter: {
				value: 0
			}
		};
	}

	render() {
		return (
			<React.Fragment>
				<Counters counter={this.state.counter} />
			</React.Fragment>
		);
	}
}

export default App;
