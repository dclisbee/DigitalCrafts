import Dealership from "./components/dealership/Dealership";
import Neighborhood from "./components/neighborhood/Neighborhood";
import "./app.css";
function App() {
	return (
		<div className="box">
			<h1>props drilling</h1>
			<Neighborhood />
			<Dealership />
		</div>
	);
}

export default App;
