import { INCREMENT_COUNTER } from "../action-types/newsarticle";

const initialState = {
	counter: 0,
};

const counterData = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_COUNTER:
			return state + 1;
		case "DECREMENT_COUNTER":
			return state - 1;
		default:
			return state;
	}
};
export default counterData;
