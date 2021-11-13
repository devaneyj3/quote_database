import React from "react";
import Card from "../../UI/Card/Card";
import QuoteContent from "../QuoteContent/QuoteContent";
import { useParams, useNavigate, useLocation } from "react-router";

import "./Quote.scss";
import CustomButton from "../CustomButton/CustomButton";

export default function Quote() {
	const { quoteID } = useParams();
	const navigate = useNavigate();
	const { state } = useLocation();

	const quote = state.find((quote) => parseInt(quote.id) === parseInt(quoteID));
	console.log(quote);
	return (
		<section>
			<Card className="quote">
				<QuoteContent quote={quote} className="right" />
			</Card>
			<div className="btn_container">
				<CustomButton
					className="btn_container"
					onClick={() => navigate("/quotes")}>
					Go Back
				</CustomButton>
			</div>
		</section>
	);
}
