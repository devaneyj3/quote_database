import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Quotes from "./Components/Quotes/Quotes";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quotes" element={<Quotes />} />
			</Routes>
		</div>
	);
};

export default App;
