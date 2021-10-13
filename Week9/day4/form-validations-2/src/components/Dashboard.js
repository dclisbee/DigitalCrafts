import React from "react";
import Plot from "react-plotly.js";
export default function Dashboard() {
	return (
		<div>
			<script src="https://cdn.plot.ly/plotly-2.5.1.min.js"></script>
			<Plot
				data={[
					{
						x: [1, 2, 3],
						y: [2, 6, 3],
						type: "scatter",
						mode: "lines+markers",
						marker: { color: "red" },
					},
					{ type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
				]}
				layout={{ width: 720, height: 440, title: "A Fancy Plot" }}
			/>
			<div>Work Orders</div>
		</div>
	);
}
