// const initialState = {
// 	userName: "",
// 	email: "",
// 	address: "",
// 	userData: "",
// };
import { combineReducers } from "redux";
import userData from "./user";
import graphData from "./graphData";
import loginInfo from "./loginInfo";

const rootReducer = combineReducers({
	userData,
	graphData,
	loginInfo,
});

// export const rootReducer = (state = initialState, action) => {
// 	switch (action.type) {
// case "SET_USERNAME":
// 	return { ...state, username: action.payload };
// case "SET_EMAIL":
// 	return { ...state, email: action.payload };
// case "SET_ADDRESS":
// 	return { ...state, address: action.payload };
// case "GET_USER":
// 	return { ...state, userData: action.payload };
// default:
// 		// 	return state;
// 	}
// };
export default rootReducer;
