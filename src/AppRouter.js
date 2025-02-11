import { Routes, Route } from "react-router-dom";
import { Home } from "./modules/home";
import {Categories} from "./modules/recipes/categories";
// This is not a create recipe page but a protected route!!!
// import { CreateRecipe } from "./modules/recipes/CreateRecipe";
import { Favorites } from "./modules/user/Favorites";
import { SearchBar } from "./modules/recipes/search-bar";
// You don't have this component, remove or create the component first, then add the import 
// import { About } from "./modules/recipes/about/About";
import { Login } from "./modules/user/Login";
import { Logout } from "./modules/user/Logout";
import { RecipeList } from "./modules/recipes/recipe-list";
import Register from "./modules/user/Register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />{" "}
      <Route path="/user" element={<h1>User page</h1>} />
      <Route path="/settings" element={<h1>Settings page</h1>} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<RecipeList />} />
      {/* YOu don't have a CreateRecipe component defined, create it first
      <Route path="/create" element={<CreateRecipe />} /> */}
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search" element={<SearchBar />} />
      {/* You don't have this component, remove or create the component first, then add the route
       <Route path="/about" element={<About />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};
