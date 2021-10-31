import React from "react";
import "../styles/home.css";
import CardContainer from "./CardContainer";
import Navbar from "./Navbar";

export default function Home() {
	return (
		<div className="main-cont">
			<Navbar />
			<CardContainer />
		</div>
	);
}
