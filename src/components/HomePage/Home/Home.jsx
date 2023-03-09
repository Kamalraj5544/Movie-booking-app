import NavBar from "../../../components/NavBar/NavBar";
import Cover from "../Cover/Cover";
import MovieCard from "../MovieSection/MovieCard/MovieCard";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./Home.scss";

import movie01 from "../../../assets/Movies/movie01.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="bg-img"></div>
      <div className="container">
        <Cover />
        <SearchPanel />
        <div className="row">
          <div className="col-md-4">
            <MovieCard title="Alone" movieImg={movie01} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
