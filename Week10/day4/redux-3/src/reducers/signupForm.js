const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
};

const SignUpFormData = (state = initialState, action) => {
	switch (action.type) {
		case "FIRSTNAME":
			return { ...state, firstName: action.payload };
		case "LASTNAME":
			return { ...state, lastName: action.payload };
		case "EMAIL":
			return { ...state, email: action.payload };
		case "PASSWORD":
			return { ...state, password: action.payload };
		default:
			return state;
	}
};

export default SignUpFormData;
