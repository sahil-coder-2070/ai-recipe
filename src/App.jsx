import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Recipe from "./components/pages/Recipe";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
