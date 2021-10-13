import SignupForm from "./components/SignupForm";
import "./app.css";
import { useEffect, useDispatch } from "react";

function App() {
	useEffect(() => {
		getWeather();
	}, []);

	const dispatch = useDispatch();
	const getWeather = async () => {
		const data = fetch(
			"http://api.openweathermap.org/data/2.5/weather?q=houston&appid=ff1cadec65d9f10c3aafc2a01b14612c"
		);
		const json = await data.json();

		dispatch({ type: "WEATHER_DATA", payload: { json } });
		console.log(json);
	};

	return (
		<div className="App">
			<SignupForm />
		</div>
	);
}

export default App;
