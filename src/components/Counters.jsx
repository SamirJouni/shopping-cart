import React from "react";
import Counter from "./Counter";

const Counters = props => {
	const formatCount = counter => {
		const { value } = counter;
		return value === 0 ? "Zero" : value;
	};

	const getBadgeClasses = counter => {
		let classes = "badge m-2 badge-";
		const { value } = counter;
		return (classes += value === 0 ? "warning" : "primary");
	};

	return (
		<React.Fragment>
			<button onClick={props.onReset}>Reset</button>
			{props.counters.map(counter => {
				return (
					<Counter
						key={counter.id}
						counter={counter}
						formatCount={formatCount}
						getBadgeClasses={getBadgeClasses}
						onIncrement={props.onIncrement}
						onDelete={props.onDelete}
					/>
			);
		})}
		</React.Fragment>
	);
};

export default Counters;
