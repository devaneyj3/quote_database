import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<ul>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/quotes">Quotes</NavLink>
			</ul>
		</div>
	);
}
