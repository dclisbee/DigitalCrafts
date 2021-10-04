import React from "react";
function DB(props) {
	const { allInfo } = props;
	return (
		<div className="dbContainer">
			<h1>Database</h1>
			<div className="Names">
				<ul>
					{allInfo.user.map((items) => (
						<li>{items}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
export default DB;
