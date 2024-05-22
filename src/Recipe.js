import React from "react";

function Recipe({name, cuisine, photo, ingredients, preparation, index, handleDelete}) {

    const deleteRecipe = () => {
        handleDelete(index);
    }

    return <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img src={photo}></img></td>
        <td className="content_td">{ingredients}</td>
        <td className="content_td">{preparation}</td>
        <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
    </tr>
}

export default Recipe;