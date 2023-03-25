import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Cover from "../Cover/Cover";
import MoviePanel from "../MovieSection/MoviePanel/MoviePanel";

import SearchPanel from "../SearchPanel/SearchPanel";
import "./Home.scss";



const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="bg-img"></div>
      <div className="container">
        <Cover />
        <SearchPanel />
        <MoviePanel />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
