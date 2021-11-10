import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import { useNavigate, useLocation } from "react-router-dom";
import "./Quotes.scss";

const QUOTES = [
	{
		id: 1,
		body: "You miss 100% of the shots you don't take",
		author: "Michael Scott",
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
							<div className="content">
								<h1 className="body">{quote.body}</h1>
								<p className="author">{quote.author}</p>
							</div>
							<div
								className="button"
								onClick={() => navigate(`${location.pathname}/${quote.id}`)}>
								<button className="view">View</button>
							</div>
						</Card>
					);
				})
			) : (
				<h1>No Quotes Found</h1>
			)}
		</div>
	);
}
