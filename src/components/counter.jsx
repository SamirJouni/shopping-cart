import React from "react";

const Counter = props => {
	return (
		<div>
			<span className="badge badge-primary m-2">{props.formatCount()}</span>
			<button className="btn btn-secondary btn-sm">Increment</button>
		</div>
	);
};

export default Counter;
