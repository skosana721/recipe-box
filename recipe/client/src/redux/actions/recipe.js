import axios from "axios";
import { ADD_RECIPE } from "../actionTypes/recipe";

export const addRecipe = (recipe) => {
  return (dispatch) => {
    axios.post("http://localhost:4000/api/recipe", { recipe }).then((res) =>
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      })
    );
  };
};
