import React, { useState } from "react";
import { deleteRecipe } from "../redux/actions/recipe";
import {
  ListGroup,
  ListGroupItem,
  Collapse,
  CardBody,
  Button,
  Card,
} from "reactstrap";
function Recipe({ recipe, _id, ingredients }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <ListGroup>
        <ListGroupItem>
          <span onClick={toggle}>{recipe}</span>
          <Button>Delete</Button>
        </ListGroupItem>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>{ingredients}</CardBody>
          </Card>
        </Collapse>
      </ListGroup>
    </div>
  );
}

export default Recipe;
