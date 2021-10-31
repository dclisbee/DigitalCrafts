import React from "react";
import Navbar from "./Navbar";
import "../styles/home.css";
import "../styles/search.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function Search() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state?.search);
	const [show, setShow] = useState(false);
	const [formData, setFormData] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [counter, setCounter] = useState(0);
	const [title, setTitle] = useState("");

	const URL = `https://api.themoviedb.org/3/search/movie?api_key=9ebf17d0e1b8a4a97ed960fc834a697d&query=cinderella`;

	useEffect(() => {
		const getMovieData = async () => {
			// e.preventDefault();
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
				type: "FIND_MOVIE",
				payload: jsonMovies.results,
			});
		};
		getMovieData();

		return () => {};
	}, [counter, dispatch]);
	console.log(data);

	return (
		<div className="main-cont">
			<Navbar />
			<form>
				<div className="input-container">
					<input
						placeholder="Type a movie name..."
						type="text"
						id="search"
						className="input"
						onChange={(e) => setTitle(e.target.value)}
					></input>
					<button className="button-54">Search</button>
				</div>
				<div className="main2">
					{data?.map((movie) => (
						<Movie movie={movie} />
					))}
				</div>
			</form>
		</div>
	);
}
