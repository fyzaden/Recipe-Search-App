import { RecipeList } from "../recipes/recipe-list";
import { SearchBar } from "../recipes/search-bar";
import {Categories} from "../recipes/categories";
// Components that I commentted out are not difened. Either remove them, or create components first
// import { About } from "../recipes/about/About";
import { Login } from "../user/Login";
import { Logout } from "../user/Logout";
// import { CreateRecipe } from "../recipes/CreateRecipe";
// import { Favorites } from "../user/Favorites";

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <RecipeList />
      {/* <Favorites /> */}
      {/* <CreateRecipe /> */}
      <SearchBar />
      {/* <About /> */}
      <Login />
      <Logout />
    </div>
  );
};
