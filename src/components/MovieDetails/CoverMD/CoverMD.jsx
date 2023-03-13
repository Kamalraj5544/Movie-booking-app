import "./CoverMD.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CoverMD = () => {
  const [movie, setMovie] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie").then((response) => {
      console.log(response.data);
      const clickedMovie = response.data.find((m) => m._id === id);
      console.log(clickedMovie);
      setMovie({ ...clickedMovie });
      console.log(movie);
    });
  }, []);
  return (
    <section className="banner-section">
      <div className="container">
        <div className="details-banner-wrapper">
          <div>
            <img src={movie.posterUrl} className="movie-img" />
          </div>
          <div className="details-content col-offset-3">
            <div className="bold movie-name">{movie.name}</div>
            <div className="movie-lang">
              {movie.languages &&
                movie.languages.map((language,index) => (
                  <span key={index+language}>{language} {index !== movie.languages.length-1 ? " , " : ""}</span>
                ))}
            </div>
            <div className="movie-genre">
            {
              movie.genre && movie.genre.map((g,index) => (
                <button className="movie-genre-btn" key={index}>{g}</button>
              ))
            }
             
            </div>
            <div className="date-time">
              <span className="release-date">
                <span className="pi pi-calendar"></span> {movie.dateOfRelease}
              </span>
              <span className="duration">
                <span className="pi pi-clock"></span>{movie.duration} mins
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="book-section">
        <div className="container col-offset-4"></div>
      </div>
    </section>
  );
};

export default CoverMD;
