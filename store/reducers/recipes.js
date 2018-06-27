import { ADD_RECIPE, DELETE_RECIPE, SELECT_RECIPE, DESELECT_RECIPE } from "../actions/actionTypes";

const initialState = {
    user: null,
    selectedRecipe: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_RECIPE:
            return {
                ...state,
            };
        case DELETE_RECIPE:
            return {
                ...state,
            };
        case SELECT_RECIPE:
            return {
                ...state,
            };
        case DESELECT_RECIPE:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default reducer;