import { RecipeList } from "../recipes/recipe-list/RecipeList";
import { SearchBar } from "../recipes/search-bar";
import Categories from "../../../categories";
import { About } from "../recipes/about/About";
import { Login } from "../user/Login";
import { Logout } from "../user/Logout";
import { CreateRecipe } from "../user/CreateRecipe";
import { Favorites } from "../user/Favorites";
import { Search } from "../recipes/search/Search";

export const Home = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <RecipeList />
      <Favorites />
      <CreateRecipe />
      <Search />
      <About />
      <Login />
      <Logout />
    </div>
  );
};
