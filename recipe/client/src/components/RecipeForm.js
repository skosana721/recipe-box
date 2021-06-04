import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../redux/actions/recipe";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Alert,
} from "reactstrap";
import { useHistory, Link } from "react-router-dom";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipe: "",
    ingredients: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (error) {
      setTimeout(() => setError(""), 5000);
    }
  }, [error]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.recipe && formData.ingredients) {
      setError("");
      dispatch(addRecipe(formData));
      history.push("/recipeList");
      setFormData({
        recipe: "",
        ingredients: "",
      });
    } else {
      setError(`Can't submit form with an empty field`);
    }
  };

  return (
    <Container>
      {error && (
        <Alert color="danger" className="error_msg">
          {error}
        </Alert>
      )}

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
      <Link to="/recipeList">View recipes</Link>
    </Container>
  );
}

export default RecipeForm;
