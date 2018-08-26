import React from "react";

const Counter = props => {
	return (
		<div>
			<span className={props.setClasses()}>{props.formatCount()}</span>
			<button className="btn btn-secondary btn-sm">Increment</button>
		</div>
	);
};

export default Counter;
