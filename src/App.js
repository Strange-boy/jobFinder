import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

//in order to import the pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<header>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
				</nav>
			</header>
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
