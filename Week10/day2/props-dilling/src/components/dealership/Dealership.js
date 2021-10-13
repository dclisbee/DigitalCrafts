import React from "react";
import "../../app.css";
import { useSelector } from "react-redux";
export default function Dealership(props) {
	const bugatti = useSelector((state) => state.bugatti);

	return (
		<div className="box">
			<h1>Dealership</h1>
			<h2>Cars in Dealership</h2>
			<p>{props.mustang}</p>
			<p>{bugatti}</p>
		</div>
	);
}
