import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import QuoteContent from "../QuoteContent/QuoteContent";
import CustomButton from "../CustomButton/CustomButton";
import { useNavigate, useLocation } from "react-router-dom";
import "./Quotes.scss";

const QUOTES = [
	{
		id: 1,
		body: "You miss 100% of the shots you don't take",
		author: "Michael Gary Scott",
		comments: [],
	},
	{
		id: 2,
		body: "Lauren likes to make guacomole",
		author: "Timothy Susan Rorher",
		comments: [],
	},
];
export default function Quotes() {
	const [quotes, setQuotes] = useState(QUOTES);
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
										state: QUOTES,
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
