import React from "react";
import Counter from "./Counter";

const Counters = props => {

	const formatCount = () => {
		const { value } = props.counter;
		return value === 0 ? "Zero" : value;
	};

	const setCountClasses = () => {
		let classes = 'badge m-2 badge-';
		const { value } = props.counter;
		return classes += value === 0 ? 'warning' : 'primary';
	}

	return <Counter counter={props.counter} formatCount={formatCount} setClasses={setCountClasses} />;
};

export default Counters;
