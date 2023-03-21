import "./BookingHeader.scss";

const BookingHeader = ({ movie,cinema }) => {
  return (
    <div className="booking-header">
      <div className="bg-booking-header"></div>
      <div className=" container flex flex-column justify-content-center align-items-center">
        <h3 className="movie-name text-6xl text-center bold uppercase">
          {movie.name}
        </h3>
        <div className="movie-lang">
        <span className="p-1 text-base">{cinema && cinema.name !== undefined && cinema.name }</span> 
        <span className="teal-color p-1 text-2xl"> | {" "}</span> 
          {movie.languages &&
            movie.languages.map((language, index) => (
              <span key={index + language} className="p-1 text-base">
                {language}
              </span>
            ))}
            <span className="teal-color p-1 text-2xl"> | {" "}</span> 
        </div>
      </div>
    </div>
  );
};

export default BookingHeader;
