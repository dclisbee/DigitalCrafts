import React, { useState } from "react";
import Card from "./Card";
import Popup from "./Popup";
import "../styles/cardcont.css";

export default function CardContainer() {
	return (
		<div>
			<h1>Most Popular</h1>
			<hr></hr>
			<Card />
		</div>
	);
}
