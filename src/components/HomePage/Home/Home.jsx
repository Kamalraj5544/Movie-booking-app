import NavBar from "../../../components/NavBar/NavBar";
import Cover from "../Cover/Cover";
import SearchPanel from "../SearchPanel/SearchPanel";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Cover />
      </div>
      <SearchPanel />
    </div>
  );
};

export default Home;
