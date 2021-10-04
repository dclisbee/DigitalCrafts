import { useState } from "react";
import Signup from "./components/Signup.js";
import DB from "./components/DB.js";

function App() {
	const [info, setAllInfo] = useState([]);
	return (
		<div className="App">
			<Signup allInfo={info} setAllInfo={setAllInfo} />
			<DB allInfo={info} />
		</div>
	);
}

export default App;
