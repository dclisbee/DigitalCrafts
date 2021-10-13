import React from "react";
import "../../app.css";
import { useSelector } from "react-redux";

export default function Exotics() {
	const bugatti = useSelector((state) => state.bugatti);
	return (
		<div className="box">
			<h1>Exotics</h1>
			{bugatti}
		</div>
	);
}
