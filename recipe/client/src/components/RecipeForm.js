import React, { useState } from "react";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipe: "",
    ingredients: [],
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter recipe "
        />
        <textarea
          name=""
          id=""
          onChange={handleChange}
          cols="30"
          rows="7"
          placeholder="Enter ingredients"
        ></textarea>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default RecipeForm;
