import React from "react";
import "../../app.css";

export default function Musclecars(props) {
	return (
		<div className="box">
			<h1>Muscle Cars</h1>
			<p>{props.mustang}</p>
		</div>
	);
}
