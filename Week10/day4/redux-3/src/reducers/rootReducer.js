import { combineReducers } from "redux";
import SignUpFormData from "./signupForm";
import counterData from "./counter";

// const initialState = {
// 	firstName: "",
// 	lastName: "",
// 	email: "",
// 	password: "",
// };

const rootReducer = combineReducers({
	SignUpFormData,
	counterData,
});
export default rootReducer;
