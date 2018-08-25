import React, { Component } from "react";
import Counters from "../components/Counters";
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
				<Counters counter={this.state.counter} formatCount={this.formatCount}/>
			</React.Fragment>
		);
	}
}

export default App;
