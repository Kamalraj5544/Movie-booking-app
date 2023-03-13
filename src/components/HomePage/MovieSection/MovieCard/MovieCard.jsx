import { Card } from "primereact/card";

import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const header = <img src={movie.posterUrl} alt={movie.name + "image"} />;
  return (
    <Card title={movie.name} header={header} className="w-full">
      <hr />
      <div className="footer-card">
        <div>
          <img src="https://pixner.net/boleto/demo/assets/images/movie/tomato.png" />
          &nbsp;&nbsp;
          <span>88%</span>
        </div>
        <div>
          <img src="https://pixner.net/boleto/demo/assets/images/movie/cake.png" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>88%</span>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
