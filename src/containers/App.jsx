import React, { Component } from "react";
import Counters from "../components/Counters";
import Navbar from "../components/Navbar";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			counters: [
				{ value: 0, id: 0},
				{ value: 0, id: 1 },
				{ value: 0, id: 2 },
				{ value: 3, id: 3 },
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

	handleReset = () => {
		const counters = this.state.counters.map ((counter) => {
			counter.value = 0;
			return counter;
		});
		this.setState({counters});
	};

	handleAdd = () => {
		const id = this.state.counters.length;
		const counters =[...this.state.counters];
		counters.push({value:0, id: id},);
		this.setState({counters});
	}

	render() {
		return (
			<React.Fragment>
				<Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length}/>
				<main className="m-4">
					<Counters
						counters={this.state.counters}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
						onReset={this.handleReset}
						onAdd={this.handleAdd}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
