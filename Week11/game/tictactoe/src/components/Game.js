import React from "react";
import Board from "./Board";
import { useState } from "react";
import { calculateWinner } from "../functions/winner";

export default function Game() {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXisNext] = useState(true);
	const winner = calculateWinner(board);

	return (
		<div>
			<Board />
		</div>
	);
}
