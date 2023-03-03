import NavBar from "../../../components/NavBar/NavBar";
import Cover from "../Cover/Cover";
import "./Home.scss"

const Home = () => {
  return (
    <div>
    <NavBar />
      <div className="homeContainer">
        <Cover />
      </div>
    </div>
  );
};

export default Home;
