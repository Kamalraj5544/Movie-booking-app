import "./TicketPlanHeader.scss";

const TicketPlanHeader = ({ movie }) => {
  return (
    <div className="ticket-plan-header">
      <div className=" container flex flex-column justify-content-center align-items-center">
        <h3 className="movie-name text-6xl text-center bold uppercase">{movie.name}</h3>
        <div className="movie-lang">
          {movie.languages &&
            movie.languages.map((language, index) => (
              <span key={index + language} className="p-1 text-base">
                {language} 
                {/* {index !== movie.languages.length - 1 ? " , " : ""} */}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TicketPlanHeader;
