import React from "react";
import "./RecipeList.css";

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      <h1>Top Dishes For You</h1>
      <ul className="recipe-item">
        {recipes.map((recipe) => (
          <li key={recipe.idMeal} onClick={() => onSelectRecipe(recipe.idMeal)}>
            <h3>{recipe.strMeal}</h3>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
