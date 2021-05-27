import React from "react";
import { useSelector } from "react-redux";
import Recipe from "./Recipe";

function RecipeList() {
  const recipeList = useSelector((state) => state.recipeList);
  return (
    <div>
      {recipeList.map((recipe) => {
        return <Recipe key={recipe._id} {...recipe} />;
      })}
    </div>
  );
}

export default RecipeList;
