import { GET_MOVIES } from "../actions/actions.js";
const initialState = [];

function cards(state = initialState, action) {
	switch (action.type) {
		case GET_MOVIES:
			return action.payload;
		default:
			return state;
	}
}

export default cards;
