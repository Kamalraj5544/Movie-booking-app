import "./CoverMD.scss";

import tomato from "../../../assets/Movies/tomato.png";
import cake from "../../../assets/Movies/cake.png";
import { Link, useNavigate } from "react-router-dom";

const CoverMD = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <section className="banner-section">
      <div className="container">
        <div className="details-banner-wrapper">
          <div>
            <img src={movie.posterUrl} className="movie-img" />
          </div>
          <div className="details-movie-content">
            <div className="bold movie-name">{movie.name}</div>
            <div className="movie-lang">
              {movie.languages &&
                movie.languages.map((language, index) => (
                  <span key={index + language}>
                    {language}{" "}
                    {index !== movie.languages.length - 1 ? " , " : ""}
                  </span>
                ))}
            </div>
            <div className="movie-genre">
              {movie.genre &&
                movie.genre.map((g, index) => (
                  <button className="movie-genre-btn" key={index}>
                    {g}
                  </button>
                ))}
            </div>
            <div className="date-time">
              <span className="release-date">
                <span className="pi pi-calendar"></span> {movie.dateOfRelease}
              </span>
              <span className="duration">
                <span className="pi pi-clock"></span> {movie.duration} mins
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="book-section">
        <div className="book-section-container">
          <div className="detail-items">
            <div className="tomato">
              <div className="item-header">
                <img src={tomato} />
                <span>88%</span>
              </div>
              <p className="flex justify-content-center">Tomatometer</p>
            </div>
            <div className="audience">
              <div className="item-header">
                <img src={cake} />
                <span>92%</span>
              </div>
              <div className="flex justify-content-center">Audience Score</div>
            </div>
            <div className="user-rating">
              <div className="item-header">
                <span>4.5</span>
                <div className="rated">
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                </div>
              </div>
              <div className="flex justify-content-center">User Rating</div>
            </div>
            <div className="rate">
              <div className="item-header">
                <div className="rate-it">
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                  <i className="pi pi-heart-fill"></i>
                </div>
                <span className="margin-left">0.0</span>
              </div>
              <div className="flex justify-content-center">Rate It</div>
            </div>
          </div>
          <Link to={`/movie/${movie._id}/ticketplan`}>
            <button className="custom-btn book-btn">book tickets</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoverMD;
