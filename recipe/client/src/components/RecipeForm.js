import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions/recipe";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { useHistory } from "react-router-dom";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipe: "",
    ingredients: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.recipe && formData.ingredients) {
      dispatch(addRecipe(formData));
      setFormData({
        recipe: "",
        ingredients: "",
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} className="recipe-form">
        <FormGroup>
          <Label for="recipe">Email</Label>
          <Input
            type="text"
            name="recipe"
            onChange={handleChange}
            id="recipe"
            placeholder="Enter recipe "
            value={formData.recipe}
          />
        </FormGroup>
        <FormGroup>
          <Label for="ingredients">Text Area</Label>
          <Input
            type="textarea"
            name="ingredients"
            id="ingredients"
            onChange={handleChange}
            placeholder="Enter ingredients"
            value={formData.ingredients}
          />
        </FormGroup>
        <Button color="primary">Add</Button>
      </Form>
    </Container>
  );
}

export default RecipeForm;
