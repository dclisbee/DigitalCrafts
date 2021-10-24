import React from "react";
import { useState } from "react";
import Square from "./Box";
import "./box.css";
import "./board.css";
export default function Board() {
	const [xIsNext, setXisNext] = useState(true);
	return (
		<div>
			<div className="boardStyle">
				<Square
					className="boxStyle"
					value=""
					onClick={() => console.log("clicked")}
				/>
				<Square className="boxStyle" value="" onClick={() => "x"} />
				<Square className="boxStyle" value="" onClick={() => "x"} />
				<Square className="boxStyle" value="" onClick={() => "x"} />
				<Square className="boxStyle" value="" onClick={() => "x"} />
				<Square className="boxStyle" value="" onClick={() => "x"} />
				<Square className="boxStyle" value="" onClick={() => "x"} />
				<Square className="boxStyle" value="" onClick={() => "x"} />
				<Square className="boxStyle" value="" onClick={() => "x"} />
			</div>
		</div>
	);
}
