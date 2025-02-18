import { Routes, Route } from "react-router-dom";
import { Home } from "./modules/home";
import { Categories } from "./modules/categories/Categories";
import { SearchBar } from "./modules/recipes/search-bar";
import { Login } from "./modules/user/Login";
import { Logout } from "./modules/user/Logout";
import { RecipeList } from "./modules/recipes/recipe-list/RecipeList";
import Register from "./modules/user/Register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/user" element={<h1>User page</h1>} />
      <Route path="/settings" element={<h1>Settings page</h1>} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<RecipeList />} />
      <Route path="/search" element={<SearchBar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
