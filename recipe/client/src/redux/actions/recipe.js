import axios from "axios";
import { ADD_RECIPE, GET_RECIPES } from "../actionTypes/recipe";

export const getRecipe = () => {
  return (dispatch) => {
    axios.get("http://localhost:4000/api/recipe").then((res) =>
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      })
    );
  };
};
export const addRecipe = (recipe) => {
  return (dispatch) => {
    axios.post("http://localhost:4000/api/recipe", recipe).then((res) =>
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      })
    );
  };
};
