import "./App.css";
import { AppRouter } from "./AppRouter";
import Navbar from "./modules/recipes/navbar/Navbar";
import { UserProvider } from "./modules/user/UserProvider";
import { SearchBar } from "./modules/recipes/search-bar";
import { Banner } from "./modules/recipes/banner";

export const App = () => {
  return (
    <UserProvider>
      <div className="container">
        <header>Recipe Search App</header>
        <AppRouter />
        <Navbar />
        <SearchBar />
        <Banner />
      </div>
    </UserProvider>
  );
};

export default App;
