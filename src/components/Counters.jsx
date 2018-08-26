import React from "react";
import Counter from "./Counter";

const Counters = props => {
	const formatCount = () => {
		const { value } = props.counter;
		return value === 0 ? "Zero" : value;
	};

	return <Counter counter={props.counter} formatCount={formatCount} />;
};

export default Counters;
