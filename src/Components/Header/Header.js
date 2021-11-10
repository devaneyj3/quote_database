import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
	return (
		<nav>
			<section className="nav">
				<section className="logo">
					<NavLink to="/" className="title">
						Great Quotes
					</NavLink>
				</section>
				<section className="links">
					<NavLink to="/quotes">All Quotes</NavLink>
					<NavLink to="/add-quote">Add a Quote</NavLink>
				</section>
			</section>
		</nav>
	);
}
