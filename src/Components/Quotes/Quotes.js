import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import QuoteContent from "../QuoteContent/QuoteContent";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate, useLocation } from "react-router-dom";
import "./Quotes.scss";

export default function Quotes({ quotes }) {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<div>
			{quotes.length > 0 ? (
				quotes.map((quote) => {
					return (
						<Card key={quote.id} className="quotes">
							<QuoteContent quote={quote} />
							<CustomButton
								onClick={() =>
									navigate(`${location.pathname}/${quote.id}`, {
										state: quotes,
									})
								}>
								View
							</CustomButton>
						</Card>
					);
				})
			) : (
				<h1>No Quotes Found</h1>
			)}
		</div>
	);
}
