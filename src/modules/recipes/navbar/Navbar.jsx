import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/categories">Categories</Link>
      <Link to="/create">Create New Recipe</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/search">Search</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar;
