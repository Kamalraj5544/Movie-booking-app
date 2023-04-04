import { Card } from "primereact/card";

import tomato from "../../../../assets/Movies/tomato.png";
import cake from "../../../../assets/Movies/cake.png";

import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const header = <img src={movie.posterUrl} alt={movie.name + "image"} />;
  return (
    <Card title={movie.name} header={header} className="w-full">
      <hr />
      <div className="footer-card">
        <div>
          <img src={tomato} />
          &nbsp;&nbsp;
          <span>88%</span>
        </div>
        <div>
          <img src={cake} />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>88%</span>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
