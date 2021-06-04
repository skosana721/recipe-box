import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../redux/actions/recipe";
import { Container, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

import Recipe from "./Recipe";

function RecipeList() {
  const recipeList = useSelector((state) => state.recipeList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipe());
  }, [dispatch]);
  return (
    <Container>
      <ListGroup>
        {recipeList.map((recipe) => {
          return <Recipe key={recipe._id} {...recipe} />;
        })}
      </ListGroup>
      <Link to="/">Go to home</Link>
    </Container>
  );
}

export default RecipeList;
