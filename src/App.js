import { SearchBar } from "./modules/recipes/search-bar";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchRecipesByIngredient } from "./modules/recipes/recipeService";
import RecipeList from "./modules/recipes/recipe-list/RecipeList";
import { Banner } from "./modules/recipes/banner/banner";

export const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) => {
      setRecipes(recipes.length > 0 ? recipes : []);
    });
  }, []);

  const onSelectRecipe = async (id) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await response.json();
    setSelectedRecipe(data.meals[0]);
  };

  return (
    <>
      <>
        <header>Recipe Search App</header>
        <SearchBar />
        <Banner />
        {selectedRecipe && (
          <div className="selected-recipe">
            <h2>{selectedRecipe.strMeal}</h2>
            <div className="selected-recipe-content">
              <div>
                <img
                  src={selectedRecipe.strMealThumb}
                  alt={selectedRecipe.strMeal}
                />
              </div>
              <div>
                <h3>Instructions</h3>
                <p>{selectedRecipe.strInstructions}</p>
              </div>
            </div>
          </div>
        )}

        {recipes.length > 0 ? (
          <RecipeList recipes={recipes} onSelectRecipe={onSelectRecipe} />
        ) : (
          <p>No recipes found.</p>
        )}
      </>
    </>
  );
};

export default App;
