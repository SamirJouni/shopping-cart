import React, { Component } from "react";
import Counters from "../components/Counters";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			counters: [
				{value: 4, id: 0},
				{ value: 0, id: 1 },
				{ value: 0, id: 2 },
				{ value: 0, id: 3 },
			]
		};
	}

	handleIncrement = counter => {
		console.log(counter);
	};

	render() {
		return (
			<React.Fragment>
				<Counters
					counters={this.state.counters}
					onIncrement={this.handleIncrement}
				/>
			</React.Fragment>
		);
	}
}

export default App;
