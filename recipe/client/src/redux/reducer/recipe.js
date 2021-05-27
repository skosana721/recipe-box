import { ADD_RECIPE } from "../actionTypes/recipe";

const initialState = {
  recipeList: [],
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return { ...state, recipeList: [...state.recipeList, action.payload] };
    default:
      return state;
  }
};
