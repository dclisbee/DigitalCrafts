import { useState } from "react";
import Signup from "./components/Signup.js";
import DB from "./components/DB.js";

function App() {
	const [allInfo, setAllInfo] = useState([]);
	return (
		<div className="App">
			<Signup allInfo={allInfo} setAllInfo={setAllInfo} />
			<DB allInfo={allInfo} />
		</div>
	);
}

export default App;
