import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Recipe from "./components/pages/Recipe";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Auth from "./components/layout/Auth";
import DeatilRecipe from "./components/pages/DeatilRecipe";
import AiRecipe from "./components/pages/AiRecipe";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/recipe/:recipeId" element={<DeatilRecipe />} />
        <Route path="/airecipe" element={<AiRecipe />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
