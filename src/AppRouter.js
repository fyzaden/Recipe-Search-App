import { Routes, Route } from "react-router-dom";
import { Home } from "./modules/home/Home"; // Home'u import ettik
import Categories from "./Categories";
import { CreateRecipe } from "./modules/user/CreateRecipe";
import { Favorites } from "./modules/user/Favorites";
import { Search } from "./modules/recipes/search/Search";
import { About } from "./modules/recipes/about/About";
import { Login } from "./modules/user/Login";
import { Logout } from "./modules/user/Logout";
import { RecipeList } from "./modules/recipes/recipe-list/RecipeList";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/user" element={<h1>User page</h1>} />
      <Route path="/settings" element={<h1>Settings page</h1>} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/category/:id" element={<RecipeList />} />
      <Route path="/create" element={<CreateRecipe />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
