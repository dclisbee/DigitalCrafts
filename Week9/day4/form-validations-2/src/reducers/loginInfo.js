const initialState = {
	userName: "",
	email: "",
	address: "",
};

const loginInfo = (state = initialState, action) => {
	switch (action.type) {
		case "SET_USERNAME":
			return { ...state, username: action.payload };
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_ADDRESS":
			return { ...state, address: action.payload };

		default:
			return state;
	}
};
export default loginInfo;
