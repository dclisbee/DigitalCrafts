import React from "react";
import Garage from "../garage/Garage";
import "../../app.css";

export default function Home(props) {
	return (
		<div className="box">
			<h1>Home</h1>
			<Garage mustang={props.mustang} />
		</div>
	);
}
