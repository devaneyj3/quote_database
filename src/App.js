import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import Quotes from "./Components/Quotes/Quotes";
import Quote from "./Components/Quote/Quote";
import AddQuote from "./Components/AddQuote/AddQuote";
import "./App.css";
const QUOTES = [
	{
		id: 1,
		body: "You miss 100% of the shots you don't take",
		author: "Michael Gary Scott",
	},
	{
		id: 2,
		body: "Lauren likes to make guacomole",
		author: "Timothy Susan Rorher",
	},
];

const App = () => {
	const [quotes, setQuotes] = useState(QUOTES);
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/quotes" />} />
				<Route path="/quotes" element={<Quotes quotes={quotes} />} />
				<Route
					path="/add-quote"
					element={<AddQuote setQuotes={setQuotes} quotes={quotes} />}
				/>
				<Route path="/quotes/:quoteID" element={<Quote />} />
			</Routes>
		</div>
	);
};

export default App;
