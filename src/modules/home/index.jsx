import { RecipeList } from "../recipes/recipe-list/RecipeList";
import { SearchBar } from "../recipes/search-bar";
import { Categories } from "../categories/Categories";
import { Login } from "../user/Login";
import { Logout } from "../user/Logout";

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <RecipeList />
      <SearchBar />
      <Login />
      <Logout />
    </div>
  );
};
