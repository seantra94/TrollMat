import { 
    ADD_RECIPE, 
    DELETE_RECIPE, 
    SELECT_RECIPE, 
    DESELECT_RECIPE
} from './actionTypes'

export const addRecipe = (recipeName) => {
    return {
        type: ADD_RECIPE,
        recipeName: recipeName,
    };
};

export const deleteRecipe = () => {
    return {
        type: DELETE_RECIPE,
    };
};

export const selectRecipe = (recipeId) => {
    return {
        type: SELECT_RECIPE,
        recipeId: recipeId,
    };
};

export const deselectRecipe = () => {
    return {
        type: DESELECT_RECIPE,
    }
}