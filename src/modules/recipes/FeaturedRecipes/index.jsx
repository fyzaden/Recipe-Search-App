import { useEffect } from "react";
import {
  useRecipesDispatch,
  RECIPE_ACTIONS,
  useRecipes,
} from "../RecipesProvider";
import { fetchRecipesByIngredient } from "../recipeService";

export const FeaturedRecipes = () => {
  const recipes = useRecipes();
  const dispatch = useRecipesDispatch();

  useEffect(() => {
    fetchRecipesByIngredient("chicken_breast").then((recipes) =>
      dispatch({ type: RECIPE_ACTIONS.update, payload: recipes }),
    );
  }, [dispatch]);

  // Use RecipeList component to display the list of recipe below
  return (
    <>
      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe) => (
            <li key={recipe.idMeal} className="recipe-item">
              {recipe.strMeal}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-recipes">No recipes found</p>
      )}
    </>
  );
};
