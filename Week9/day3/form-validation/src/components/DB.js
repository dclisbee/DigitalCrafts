import React from "react";
import { useState } from "react";

function DB(props) {
	const { list } = props;
	return (
		<div>
			<h1>User Info</h1>
			<ul>
				{list.map((userInfo) => (
					<li>{userInfo}</li>
				))}
			</ul>
		</div>
	);
}

export default DB;
