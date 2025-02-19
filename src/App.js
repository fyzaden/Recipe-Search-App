import "./App.css";
import { AppRouter } from "./AppRouter";
import { Navbar } from "./modules/shared-components/Navbar";
import { Banner } from "./modules/recipes/banner/banner";

export const App = () => {
  return (
    <>
      <Navbar />
      <Banner />

      <div className="container">
        <AppRouter />
      </div>
    </>
  );
};
