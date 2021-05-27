import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";

function RecipeList() {
  const recipeList = useSelector((state) => state.recipeList);
  console.log(recipeList);
  return <div></div>;
}

export default RecipeList;
