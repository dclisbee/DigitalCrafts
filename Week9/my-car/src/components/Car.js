import React, { Component } from "react";

export default class Car extends Component {
	state = {
		make: "Bugatti",
		model: "La voiture noire",
		engine: "v16",
		horsepower: "1500",
		price: "19000000",
		image: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
		image2:
			"https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
		transmission: "7 speed dual clutch",
		// topSpeed: [{ US: "261", Metric: "420" }],
	};
	render() {
		return (
			<div class="card">
				<div class="container">
					<img
						onClick={this.state.image2}
						height="200"
						width="300"
						src={this.state.image}
						alt=""
					></img>
					<p>{this.state.make}</p>
					<p>{this.state.model}</p>
					<p>{this.state.engine}</p>
					<p>{this.state.horsepower}</p>
					<p>{this.state.price}</p>
					<p>{this.state.transmission}</p>
					<p>{this.state.topSpeed}</p>
				</div>
			</div>
		);
	}
}
