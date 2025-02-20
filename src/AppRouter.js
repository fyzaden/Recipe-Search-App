import { Routes, Route } from "react-router-dom";
import { RecipeList } from "./modules/recipes/RecipeList";
import { SearchBar } from "./modules/recipes/SearchBar";
import { FeaturedRecipes } from "./modules/recipes/FeaturedRecipes";
import { RecipeDetails } from "./modules/recipes/RecipeDetails";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "./modules/user/Login";
import { NewRecipeForm } from "./modules/recipes/NewRecipeForm";
import Register from "./modules/user/Register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/user"
        element={
          <ProtectedRoute>
            <h1>User page</h1>
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <h1>Settings page</h1>
          </ProtectedRoute>
        }
      />

      <Route path="/recipes">
        <Route
          path="search"
          element={
            <>
              <SearchBar />
              <RecipeList />
            </>
          }
        />

        <Route path="new" element={<NewRecipeForm />} />
        <Route path=":recipeId" element={<RecipeDetails />} />
      </Route>

      <Route path="/" element={<FeaturedRecipes />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
