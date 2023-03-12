import axios from "axios";
import { useState, useEffect } from "react";

import MovieCard from "../MovieCard/MovieCard";

import "./MoviePanel.scss";

const MoviePanel = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/movie")
      .then((response) => setMovies(response.data));
  }, []);

  return (
    <div className="movie-grid">
      <div className="movie-grid-header flex flex-wrap gap-3">
        <div>
          <div className="bold">MOVIES</div>
          <p>
            Be sure not to miss these <span className="teal-color">Movies</span>{" "}
            today.
          </p>
        </div>

        <div className="flex flex-wrap justify-content-center gap-3">
          <button className="join-btn">NOW SHOWING</button>

          <button className="join-btn">COMING SOON</button>

          <button className="join-btn">EXCLUSIVE</button>
        </div>
        <div className="row card-container">
          {movies.map((movie) => (
            <div className="col-md-3 moviecard" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePanel;
