import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/card.css";
import Movie from "./Movie";
import { GET_MOVIES } from "../actions/actions";
export default function Card() {
	const URL =
		"https://api.themoviedb.org/3/movie/popular?api_key=9ebf17d0e1b8a4a97ed960fc834a697d&language=en-US&page=1&region=US";
	const [counter, setCounter] = useState(0);
	const dispatch = useDispatch();
	const data = useSelector((state) => state?.cards);

	useEffect(() => {
		const getMovieData = async () => {
			const getMovies = await fetch(URL, {
				method: "GET",
				cache: "no-cache",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const jsonMovies = await getMovies.json();
			dispatch({
				type: GET_MOVIES,
				payload: jsonMovies.results,
			});
		};
		getMovieData();

		return () => {};
	}, [counter, dispatch]);
	console.log(data);

	return (
		<div className="main2">
			{data?.map((movie) => (
				<div className="cards">
					<Movie movie={movie} />
				</div>
			))}
		</div>
	);
}
