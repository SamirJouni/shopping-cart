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
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter};
		counters[index].value++;
		this.setState({counters});
	};

	handleDelete = counter => {
		const counters = this.state.counters.filter(ctr => ctr.id !== counter.id);
		this.setState({counters});
	};

	render() {
		return (
			<React.Fragment>
				<Counters
					counters={this.state.counters}
					onIncrement={this.handleIncrement}
					onDelete={this.handleDelete}
				/>
			</React.Fragment>
		);
	}
}

export default App;
