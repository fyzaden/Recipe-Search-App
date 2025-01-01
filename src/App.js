import { SearchBar } from "./modules/recipes/search-bar";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchRecipesByIngredient } from "./modules/recipes/recipeService";
import RecipeList from "./modules/recipes/recipe-list/RecipeList";
// import { Banner } from "./modules/recipes/banner";

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
    <div>
      <div className="container">
        <header>Recipe Search App</header>
        <SearchBar />
        {/* <Banner /> */}
        {/* bir resim eklemek istedim banner bölümüne ama hata aldım sayfayı göremediğim için yorum satırına aldım */}
        {recipes.length > 0 ? (
          <ul className="recipe-cards">
            {recipes.map((recipe) => (
              <li className="recipe-items" key={recipe.idMeal}>
                {recipe.strMeal}
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
      <div>
        {selectedRecipe ? (
          <div>
            <h2>{selectedRecipe.strMeal}</h2>
            <img
              src={selectedRecipe.strMealThumb}
              alt={selectedRecipe.strMeal}
            />
            <p>{selectedRecipe.strInstructions}</p>
          </div>
        ) : (
          <RecipeList recipes={recipes} onSelectRecipe={onSelectRecipe} />
        )}
      </div>
    </div>
  );
};

export default App;
