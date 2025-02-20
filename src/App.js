import "./App.css";
import { AppRouter } from "./AppRouter";
import { Navbar } from "./modules/shared-components/Navbar";
import { Banner } from "./modules/recipes/banner/banner";
import { RecipesProvider } from "./modules/recipes/RecipesProvider";
import { NewRecipeForm } from "./modules/recipes/NewRecipeForm";
import { RecipeList } from "./modules/recipes/RecipeList";

export const App = () => {
  return (
    <>
      <RecipesProvider>
        <Navbar />
        <Banner />
        <h1>Recipe App</h1>
        <NewRecipeForm />
        <RecipeList />
        <AppRouter />
      </RecipesProvider>
    </>
  );
};
