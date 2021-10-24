import React from "react";

export default function Students(props) {
	return (
		<div>
			<h1>Students</h1>
			{props?.students.map((student) => (
				<p>student.name</p>
			))}
		</div>
	);
}
