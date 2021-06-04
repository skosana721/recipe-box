import React, { useState } from "react";
import { deleteRecipe } from "../redux/actions/recipe";
import { useDispatch } from "react-redux";
import { ListGroupItem, Collapse, CardBody, Button, Card } from "reactstrap";
import EditModal from "./EditModal";
function Recipe({ recipe, _id, ingredients }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  return (
    <ListGroupItem className="recipe">
      <span onClick={toggle}>{recipe}</span>
      <Button
        outline
        color="danger"
        className="delete_btn"
        onClick={() => dispatch(deleteRecipe(_id))}
      >
        Delete
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            {ingredients}
            <EditModal ingredients={ingredients} id={_id} />
          </CardBody>
        </Card>
      </Collapse>
    </ListGroupItem>
  );
}

export default Recipe;
