import React from "react";

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<span className="navbar-brand">
				TOTAL : <span className="badge badge-pill badge-secondary ml-2">{props.totalCounters}</span>
			</span>
		</nav>
	);
};

export default Navbar;
