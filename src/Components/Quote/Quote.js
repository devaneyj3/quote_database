import React from "react";
import Card from "../../UI/Card/Card";
import { useParams, useNavigate } from "react-router";

export default function Quote() {
	const params = useParams();
	const navigate = useNavigate();
	return (
		<section className="quote">
			<Card>
				<h1>{params.quoteID}</h1>
			</Card>
			<button onClick={() => navigate("/quotes")}>Go Back</button>
		</section>
	);
}
