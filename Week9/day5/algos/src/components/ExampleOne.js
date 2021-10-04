import React from "react";
import { useState } from "react";
import ListOfNames from "./ListOfNames";

export default function ExampleOne() {
	const [userName, setUserName] = useState([]);
	const [listOfNames, setlistOfNames] = useState([]);

	return (
		<div>
			<label>Enter your name:</label>
			<input
				onChange={(e) => setUserName(e.target.value)}
				type="text"
				placeholder="Name"
			/>
			<button onClick={() => setlistOfNames([...listOfNames, userName])}>
				Submit
			</button>

			<ListOfNames list={listOfNames} />
		</div>
	);
}
