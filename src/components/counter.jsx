import React from "react";

const Counter = (props) => {

	return (
			<div>
				<span className='m-5'>{props.formatCount()}</span>
				<button>Increment</button>
			</div>
		);
}

export default Counter;
