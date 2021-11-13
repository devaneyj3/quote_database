import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router";
import "./AddQuote.scss";

export default function AddQuote({ quotes, setQuotes }) {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");
	const [error, setError] = useState("");
	const [newQuote, setNewQuote] = useState("");
	const navigate = useNavigate();
	const formSubmit = (e) => {
		e.preventDefault();
		if (quote === "") {
			setError("Enter in a quote");
		} else if (author === "") {
			setError("Enter in a author");
		} else {
			setError("");
			const quoteObj = {
				id: uuidv4(),
				body: quote,
				author: author,
			};
			setQuotes([...quotes, quoteObj]);
			setNewQuote(quoteObj);
			setTimeout(() => {
				navigate("/quotes");
			}, 2000);
			setQuote("");
			setAuthor("");
		}
	};
	return (
		<Form onSubmit={formSubmit} className="addNewQuote">
			{error && <Alert color="danger">{error}</Alert>}
			{newQuote && (
				<Alert color="success">
					Submited quote: {newQuote.body}. Redirecting...
				</Alert>
			)}
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
