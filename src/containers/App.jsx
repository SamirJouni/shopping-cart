import React, { Component } from "react";
import Counter from "../components/Counter";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<Counter />
			</React.Fragment>
		);
	}
}

export default App;
