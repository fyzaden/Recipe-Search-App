import { Routes, Route } from "react-router-dom";
import { RecipeList } from "./modules/recipes/RecipeList";
import { SearchBar } from "./modules/recipes/SearchBar";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/user" element={<h1>User page</h1>} />
      <Route path="/settings" element={<h1>Settings page</h1>} />
      <Route
        path="/"
        element={
          <>
            <SearchBar />
            <RecipeList />
          </>
        }
      />
    </Routes>
  );
};
