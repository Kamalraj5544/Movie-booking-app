import NavBar from "../../../components/NavBar/NavBar";
import Cover from "../Cover/Cover";
import "./Home.scss"

const Home = () => {
  return (
    <>
    <NavBar />
      <div className="homeContainer">
        <Cover />
      </div>
    </>
  );
};

export default Home;
