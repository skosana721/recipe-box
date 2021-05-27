import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
function Recipe({ recipe, _id, ingredients }) {
  return (
    <div>
      <ListGroup>
        <ListGroupItem>{recipe}</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Recipe;
