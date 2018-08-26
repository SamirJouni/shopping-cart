import React from "react";

const Counter = props => {

	return (
		<div>
			<span className={props.getBadgeClasses(props.counter)}>{props.formatCount(props.counter)}</span>
			<button onClick={() => props.onIncrement(props.counter)} className="btn btn-secondary btn-sm">Increment</button>
		</div>
	);
};

export default Counter;
