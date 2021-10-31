import React from "react";
import "../styles/navbar.css";
import Home from "./Home";

export default function Navbar() {
	return (
		<div className="nav-cont">
			<a href="/">Home</a>
			<a href="/search">Search</a>
			<a href="/watchlist">Watchlist</a>
		</div>
	);
}
