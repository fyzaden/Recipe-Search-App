import "./App.css";
import { AppRouter } from "./AppRouter";
// import { Banner } from "./modules/recipes/banner";

export const App = () => {
  return (
    <div className="container">
      <header>Recipe Search App</header>
      <AppRouter />
      {/* <Banner /> */}
      {/* bir resim eklemek istedim banner bölümüne ama hata aldım sayfayı göremediğim için yorum satırına aldım */}
    </div>
  );
};

export default App;
