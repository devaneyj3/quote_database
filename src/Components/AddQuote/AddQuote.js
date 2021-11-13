import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import "./AddQuote.scss";

export default function AddQuote({ quotes, setQuotes }) {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		const newQuote = {
			id: uuidv4(),
			body: quote,
			author: author,
		};
		console.log("Quote: ", newQuote);
		setQuotes([...quotes, newQuote]);
		setQuote("");
		setAuthor("");
	};
	return (
		<Form onSubmit={formSubmit} className="addNewQuote">
			<FormGroup>
				<Label for="quote">Quote</Label>
				<Input
					name="quote"
					value={quote}
					type="text"
					onChange={(e) => setQuote(e.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="Author">Author</Label>
				<Input
					name="author"
					type="text"
					value={author}
					onChange={(e) => setAuthor(e.target.value)}
				/>
			</FormGroup>
			<Button color="primary">Add Quote</Button>
		</Form>
	);
}
