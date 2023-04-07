import axios from "axios";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { setMovies } from "../../../../store/reducers/MovieReducer";

import MovieCard from "../MovieCard/MovieCard";

import "./MoviePanel.scss";

const MoviePanel = () => {
  // const [movies, setMovies] = useState([]);
  const { movies } = useSelector((state) => state.persistedReducer.movie);
  const dispatch = useDispatch();

  const { innerWidth } = window;

  const [windowWidth, setwindowWidth] = useState(innerWidth);

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie").then((response) => {
      // setMovies(response.data);
      dispatch(setMovies(response.data));
    });

    function handleResize() {
      setwindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="movie-grid" id="movies-section">
      <div className="movie-grid-header flex flex-wrap">
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
                className={`moviecard col-md-${
                  windowWidth <= 792 ? "5" : windowWidth <= 992 ? "4" : "3"
                }`}
                key={movie._id}
                onClick={() => dispatch(setMovieIdFunc(movie._id))}
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
