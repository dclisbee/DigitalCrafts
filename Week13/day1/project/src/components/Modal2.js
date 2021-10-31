import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Modal2(movie) {
	const [showMovies, setShowMovies] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const dispatch = useDispatch();
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>{movie.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{movie.overview}</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Close
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						dispatch({
							type: "ADD_TO_LIST",
							payload: { movie },
						});
					}}
				>
					Add to Watchlist
				</Button>
			</Modal.Footer>
		</Modal>
	);
}
