import React, { Component } from "react";

export default class Card extends Component {
	state = {
		id: 1,
		name: "bulbasaur",
		hp: 45,
		sprites: {
			front:
				"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
			back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
		},
	};

	render() {
		return (
			<div class="card">
				<p>{this.state.id}</p>
			</div>
		);
	}
}
