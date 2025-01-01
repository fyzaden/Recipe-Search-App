import React from "react";
import "./RecipeList.css";

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      <h1>Top Dishes For You</h1>
      <div className="recipe-item">
        {recipes.map((recipe) => (
          <div key={recipe.id} onClick={() => onSelectRecipe(recipe.id)}>
            <h3>{recipe.title}</h3>
            <img src={recipe.strMealThumb} alt={`image of ${recipe.title}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
