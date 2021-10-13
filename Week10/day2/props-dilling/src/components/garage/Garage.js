import React from "react";
import Cars from "./Cars";
import Motorcycles from "./Motorcycles";
import "../../app.css";

export default function Garage(props) {
	return (
		<div className="box">
			<h1>Garage</h1>
			<Cars mustang={props.mustang} />
			<Motorcycles />
		</div>
	);
}
