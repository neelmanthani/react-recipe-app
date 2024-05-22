import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState(initialFormData)
  
  const handleChange = (event) => {
    setFormData({...formData, 
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {...formData};
    setRecipes([...recipes, newRecipe]);
    setFormData(initialFormData);
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>  
              <input
              id="name"
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              >
              </input>
            </td>

            <td>  
              <input
              id="cuisine"
              type="text"
              name="cuisine"
              onChange={handleChange}
              value={formData.cuisine}
              >
              </input>
            </td>

            <td>  
              <input
              id="photo"
              type="text"
              name="photo"
              onChange={handleChange}
              value={formData.photo}
              >
              </input>
            </td>

            <td>  
              <textarea
              id="ingredients"
              name="ingredients"
              onChange={handleChange}
              value={formData.ingredients}
              >
              </textarea>
            </td>

            <td>  
              <textarea
              id="preparation"
              name="preparation"
              onChange={handleChange}
              value={formData.preparation}
              >
              </textarea>
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
