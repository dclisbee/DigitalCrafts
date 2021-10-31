import { GET_LIST, ADD_TO_LIST, REMOVE_FROM_LIST } from "../actions/actions.js";
const initialState = [];

function watchlist(state = initialState, action) {
	switch (action.type) {
		case GET_LIST:
			return { ...state };
		case ADD_TO_LIST:
			return { ...state, movieData: action.payload };
		case REMOVE_FROM_LIST:
			return { ...state, movieData: !action.payload };
		default:
			return state;
	}
}

export default watchlist;
