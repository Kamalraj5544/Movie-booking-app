import "./CoverMD.scss";


const CoverMD = () => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="details-banner-wrapper">
          <div>
            <img
              src="https://pixner.net/boleto/demo/assets/images/movie/venus.jpg"
              className="movie-img"
            />
          </div>
          <div className="details-content col-offset-3">
            <div className="bold movie-name">Venus</div>
            <div className="movie-lang">English , Tamil , Telugu , Hindi</div>
            <div className="movie-genre">
              <button className="movie-genre-btn">Horror</button>
            </div>
            <div className="date-time">
              <span className="release-date">
                <span className="pi pi-calendar"></span>{" "}06 DEC, 2014
              </span>
              <span className="duration">
                <span className="pi pi-clock"></span>{" "}2hrs - 50mins
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="book-section"></div>
    </section>
  );
};

export default CoverMD;
