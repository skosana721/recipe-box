import React, { useState } from "react";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipe: "",
    ingredients: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.recipe && formData.ingredients) {
      setFormData({
        recipe: "",
        ingredients: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="recipe-form">
        <input
          type="text"
          name="recipe"
          onChange={handleChange}
          placeholder="Enter recipe "
          value={formData.recipe}
        />
        <textarea
          name="ingredients"
          id=""
          onChange={handleChange}
          cols="30"
          rows="7"
          placeholder="Enter ingredients"
          value={formData.ingredients}
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default RecipeForm;
