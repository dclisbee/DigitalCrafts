import { combineReducers } from "redux";
import cards from "./cards";
import search from "./search";
import watchlist from "./watchlist";
const rootReducer = combineReducers({
	cards,
	search,
	watchlist,
});

export default rootReducer;
