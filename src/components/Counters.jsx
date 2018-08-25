import React from "react";
import Counter from "./Counter";

const Counters = props => {
	return <Counter counter={props.counter} formatCount={props.formatCount}/>;
};

export default Counters;
