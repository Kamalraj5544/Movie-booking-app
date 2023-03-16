import "./TicketPlanHome.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../../../NavBar/NavBar";
import TicketPlanHeader from "../TicketPlanHeader/TicketPlanHeader";
import TicketPlanSearchBar from "../TicketPlanSearchBar/TicketPlanSearchBar";
import TicketPlanSection from "../TicketPlanSection/TicketPlanSection";

const TicketPlanHome = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie/" + id).then((response) => {
      console.log(response.data);
      setMovie(response.data);
      console.log(movie);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <TicketPlanHeader movie={movie} />
      <TicketPlanSearchBar />
      <div className="container">
        <TicketPlanSection />
      </div>
    </div>
  );
};

export default TicketPlanHome;
