import React from "react";
import "./CustomButton.scss";

export default function CustomButton({ children, onClick }) {
	return (
		<div className="btn">
			<button onClick={onClick} className="view">
				{children}
			</button>
		</div>
	);
}
