import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import MovieCard from "../MovieCard/MovieCard";

import "./MoviePanel.scss";

const MoviePanel = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie").then((response) => {
      setMovies(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <div className="movie-grid" id="movies-section">
      <div className="movie-grid-header flex flex-wrap gap-3">
        <div>
          <div className="bold">MOVIES</div>
          <p>
            Be sure not to miss these <span className="teal-color">Movies</span>{" "}
            today.
          </p>
        </div>

        <div className="flex flex-wrap justify-content-center gap-3">
          <button className="custom-btn">NOW SHOWING</button>
          <button className="custom-btn">COMING SOON</button>
          <button className="custom-btn">EXCLUSIVE</button>
        </div>
        <div className="row card-container">
          {movies &&
            movies.map((movie) => (
              <div
                className="col-md-3 moviecard"
                key={movie._id}
                // onClick={() => navigate("/movie/" + movie._id)}
              >
                <Link to={`/movie/${movie._id}`}>
                  <MovieCard movie={movie} />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePanel;
