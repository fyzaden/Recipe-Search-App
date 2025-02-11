import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";
import { searchRecipesByName } from "../recipeService";
import { useRecipesDispatch, RECIPE_ACTIONS } from "../RecipesProvider";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useRecipesDispatch();

  function handleChange(e) {
    setQuery(e.target.value.trim());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const recipes = await searchRecipesByName(query);
    dispatch({ type: RECIPE_ACTIONS.update, payload: recipes });
  }

  return (
    <div className="input-wrapper">
      <form onSubmit={handleSubmit} className="search-form">
        <FaSearch id="search-icon" />
        <input
          onChange={handleChange}
          aria-label="Recipe search"
          placeholder="Search for recipes..."
          value={query}
        />
      </form>
    </div>
  );
};
