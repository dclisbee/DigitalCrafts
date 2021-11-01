import React from "react";
import Navbar from "./Navbar";
import "../styles/home.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "./Movie";
import { GET_LIST } from "../actions/actions";
export default function Watchlist() {
	const dispatch = useDispatch();
	const [counter, setCounter] = useState(0);
	const data = useSelector((state) => state?.watchlist);

	useEffect(() => {
		dispatch({
			type: GET_LIST,
			payload: data,
		});

		return () => {};
	}, [counter, dispatch]);

	return (
		<div className="main-cont">
			<Navbar />
			{data?.map((movie) => (
				<Movie movie={movie} />
			))}
		</div>
	);
}
