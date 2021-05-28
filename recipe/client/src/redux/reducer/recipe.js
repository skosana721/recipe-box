import {
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  GET_RECIPES,
} from "../actionTypes/recipe";

const initialState = {
  recipeList: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipeList: action.payload,
      };
    case ADD_RECIPE:
      return { ...state, recipeList: [...state.recipeList, action.payload] };
    case DELETE_RECIPE:
      return {
        ...state,
      };
    case EDIT_RECIPE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
