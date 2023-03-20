import "./TicketPlanHome.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../../../NavBar/NavBar";
import BookingHeader from "../../BookingHeader/BookingHeader";
import TicketPlanSearchBar from "../TicketPlanSearchBar/TicketPlanSearchBar";
import TicketPlanSection from "../TicketPlanSection/TicketPlanSection";

const TicketPlanHome = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie/" + id).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });
  }, []);
  
  return (
    <div>
      <NavBar />
      <BookingHeader movie={movie} />
      <TicketPlanSearchBar />
      <TicketPlanSection movieID={movie._id} />
    </div>
  );
};

export default TicketPlanHome;
