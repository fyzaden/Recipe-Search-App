import { useForm } from "react-hook-form";
import "./styles.css";
import { RecipesProvider } from "../RecipesProvider";

export const NewRecipeForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      strMeal: "",
      strCategory: "Beef",
      strInstructions: "",
      strIngredient: "",
      strMealThumb: "",
      cookingTime: "",
    },
  });
  const categories = watch(
    "strCategory",
    "cookingTime",
    "strIngredient",
    "strMealThumb",
    "strMeal",
    "strInstructions",
  );

  const { addRecipe } = RecipesProvider();

  const onSubmit = (data) => {
    const formattedRecipe = {
      id: Date.now(),
      title: data.strMeal,
      category: data.strCategory,
      instructions: data.strInstructions,
      ingredients: data.strIngredient.split(",").map((item) => item.trim()),
      image: data.strMealThumb,
      cookingTime: parseInt(data.cookingTime, 10),
    };
    addRecipe(formattedRecipe);
    reset();
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="strMeal">Meal name</label>
      <input
        id="strMeal"
        {...register("strMeal", {
          minLength: {
            value: 3,
            message: "Meal name should be at least 3 characters.",
          },
        })}
      />
      {errors.strMeal && <p>{errors.strMeal.message}</p>}
      <label htmlFor="strCategory">Select Category</label>
      <select id="strCategory" {...register("strCategory")}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <label htmlFor="strIngredient">Ingredients</label>
      <input
        id="strIngredient"
        {...register("strIngredient", {
          required: "Please enter at least one ingredient.",
        })}
      />
      {errors.strIngredient && (
        <p className="error">{errors.strIngredient.message}</p>
      )}
      <label htmlFor="strInstructions">Instructions</label>
      <textarea
        id="strInstructions"
        {...register("strInstructions", {
          required: "Instructions are required.",
        })}
      />
      {errors.strInstructions && (
        <p className="error">{errors.strInstructions.message}</p>
      )}

      <label htmlFor="strMealThumb">Image URL</label>
      <input id="strMealThumb" {...register("strMealThumb")} />

      <label htmlFor="cookingTime">Cooking Time (minutes)</label>
      <input
        type="number"
        id="cookingTime"
        {...register("cookingTime", { required: "Cooking time is required." })}
      />
      {errors.cookingTime && (
        <p className="error">{errors.cookingTime.message}</p>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

const categories = [
  "Beef",
  "Chicken",
  "Dessert",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
  "Breakfast",
  "Goat",
];
