import React from "react";
import Navbar from "./Navbar";
import "../styles/home.css";
import "../styles/about.css";

export default function About() {
	return (
		<div className="main-cont">
			<Navbar />
			<h2>About Our Page</h2>
			<p>Lorem ipsum blah blah blah</p>
		</div>
	);
}
