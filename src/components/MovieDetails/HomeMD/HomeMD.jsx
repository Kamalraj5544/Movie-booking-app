import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import NavBar from "../../NavBar/NavBar";
import CoverMD from "../CoverMD/CoverMD";
import UserReview from "../UserReview/UserReview";
import Footer from "../../Footer/Footer";

import "./HomeMD.scss";

const HomeMd = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie/" + movieId).then((response) => {
      console.log(response.data);
      setMovie(response.data);
      console.log(movie);
    });
  }, []);

  return (
    <div>
      <NavBar />
      <CoverMD movie={movie} />
      <UserReview movie={movie} />
      <Footer />
    </div>
  );
};

export default HomeMd;
