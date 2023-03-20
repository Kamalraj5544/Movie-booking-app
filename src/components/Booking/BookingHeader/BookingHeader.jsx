import "./BookingHeader.scss";

const BookingHeader = ({ movie }) => {
  return (
    <div className="booking-header">
      <div className=" container flex flex-column justify-content-center align-items-center">
        <h3 className="movie-name text-6xl text-center bold uppercase">{movie.name}</h3>
        <div className="movie-lang">
          {movie.languages &&
            movie.languages.map((language, index) => (
              <span key={index + language} className="p-1 text-base">
                {language}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
