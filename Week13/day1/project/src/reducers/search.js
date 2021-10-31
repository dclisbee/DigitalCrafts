import { FIND_MOVIE } from "../actions/actions.js";
const initialState = [];

function search(state = initialState, action) {
	switch (action.type) {
		case FIND_MOVIE:
			return action.payload;
		default:
			return state;
	}
}

export default search;
