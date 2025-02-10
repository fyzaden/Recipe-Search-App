import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "www.themealdb.com/api/json/v1/1/categories.php",
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, [dispatch]);

  return (
    <div>
      <h1>Recipe Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
