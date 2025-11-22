import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Page from "./components/Page";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
      </Routes>
    </div>
  );
};

export default App;
