import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/movie.css";
import { ADD_TO_LIST } from "../actions/actions";

export default function Movie({ movie }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();
	return (
		<div className="card">
			<img
				id="myImg"
				alt=""
				variant="primary"
				src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
				onClick={() => {
					handleShow();
				}}
			></img>
			<p className="container">{movie.title}</p>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{movie.title}</Modal.Title>
				</Modal.Header>
				<img
					id="myImg"
					alt=""
					variant="primary"
					src={"https://image.tmdb.org/t/p/original" + movie.poster_path}
				></img>
				<Modal.Body>{movie.overview}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={() => {
							dispatch({
								type: ADD_TO_LIST,
								payload: { movie },
							});
						}}
					>
						Add to Watchlist
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
