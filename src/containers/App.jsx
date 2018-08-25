import React, { Component } from "react";
import Counter from "../components/Counter";
import "./App.css";

class App extends Component {
	constructor() {
    super();
		this.state = {
      counter: {
        value: 0,
      }
    };
	}

  formatCount = () => {
    const {value} = this.state.counter;
    return value===0 ? 'Zero' : value;
  }

	render() {
		return (
			<React.Fragment>
				<Counter counter={this.state.counter} formatCount={this.formatCount}/>
			</React.Fragment>
		);
	}
}

export default App;
