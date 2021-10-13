import Dealership from "./components/dealership/Dealership";
import Neighborhood from "./components/neighborhood/Neighborhood";
import "./app.css";
function App() {
	const mustang = "1967 boss";
	return (
		<div className="box">
			<h1>props drilling</h1>
			<Neighborhood  />
			<Dealership mustang={mustang} />
		</div>
	);
}

export default App;
