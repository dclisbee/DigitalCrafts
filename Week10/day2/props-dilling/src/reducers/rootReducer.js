const initialState = {
	recipeData: "",
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_RECIPES":
			return { ...state, recipeData: action.payload };
		default:
			return state;
	}
};

export default rootReducer;
