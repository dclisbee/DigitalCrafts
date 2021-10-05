import React from "react";
import Exotics from "./Exotics";
import Musclecars from "./Musclecars";
import "../../app.css";

export default function Cars() {
	return (
		<div className="box">
			<h1>Cars</h1>
			<Exotics />
			<Musclecars />
		</div>
	);
}
