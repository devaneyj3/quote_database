import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function AddQuote() {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const formSubmit = (e) => {
		e.preventDefault();
		console.log("Quote: ", quote);
		console.log("Author: ", author);
	};
	return (
		<Form onSubmit={formSubmit}>
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
