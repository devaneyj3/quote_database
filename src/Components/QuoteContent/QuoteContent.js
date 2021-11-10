import React from "react";

import "./QuoteContent.scss";

export default function QuoteContent({ quote, className }) {
	return (
		<div className="content">
			<div className="left">
				<h1 className="body">{quote.body}</h1>
			</div>
			<div className={className}>
				<p className="author">{quote.author}</p>
			</div>
		</div>
	);
}
