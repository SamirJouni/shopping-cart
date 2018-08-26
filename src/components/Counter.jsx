import React from "react";

const Counter = props => {

	return (
		<div>
			<span className={props.getBadgeClasses(props.counter)}>{props.formatCount(props.counter)}</span>
			<button onClick={() => props.onIncrement(props.counter)} className="btn btn-secondary btn-sm">Increment</button>
			<button onClick={() => props.onDelete(props.counter)} className="btn btn-danger btn-sm m-2">Delete</button>
		</div>
	);
};

export default Counter;
