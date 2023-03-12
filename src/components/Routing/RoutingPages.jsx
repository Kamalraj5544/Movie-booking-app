import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import MovieDetailsHome from "../MovieDetails/MovieDetailsHome/MovieDetailsHome";
import SignIn from "../Users/Sign-in/SignIn";
import SignUp from "../Users/Sign-up/SignUp";

const RouteingPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movie" element={<MovieDetailsHome />} />
      </Routes>
    </Router>
  );
};

export default RouteingPages;
