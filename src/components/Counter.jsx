import React from "react";

const Counter = props => {

	const {counter, formatCount, getBadgeClasses, onIncrement, onDelete} = props;

	return (
		<div>
			<span className={getBadgeClasses(counter)}>{formatCount(counter)}</span>
			<button onClick={() => onIncrement(counter)} className="btn btn-secondary btn-sm">Increment</button>
			<button onClick={() => onDelete(counter)} className="btn btn-danger btn-sm m-2">Delete</button>
		</div>
	);
};

export default Counter;
