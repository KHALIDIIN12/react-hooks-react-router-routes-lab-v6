import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./components/Actors"; // ✅ Correct import!
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;