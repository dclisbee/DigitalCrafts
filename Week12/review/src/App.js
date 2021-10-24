import "./App.css";
import { useState } from "react";
import StudentContainer from "./components/StudentContainer";

function App() {
	// const [students, setStudents] = useState(data);
	// setStudents is the function, calling this function changes state to the parameter

	return (
		<div className="App">
			<h1>App js</h1>
			<h3>Data starts here</h3>
			{/* props below is: a word = variable hook in braces */}
			<StudentContainer />
		</div>
	);
}

export default App;
