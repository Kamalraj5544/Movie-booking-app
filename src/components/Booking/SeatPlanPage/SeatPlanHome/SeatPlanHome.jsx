import "./SeatPlanHome.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../../../NavBar/NavBar";
import BookingHeader from "../../BookingHeader/BookingHeader";

const SeatPlanHome = () => {
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
    </div>
  );
};

export default SeatPlanHome;
