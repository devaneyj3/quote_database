import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./Components/Header/Header";
import Quotes from "./Components/Quotes/Quotes";
import Quote from "./Components/Quote/Quote";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Navigate to="/quotes" />} />
				<Route path="/quotes/" element={<Quotes />} />
				<Route path="/quotes/:quoteID" element={<Quote />} />
			</Routes>
		</div>
	);
};

export default App;
