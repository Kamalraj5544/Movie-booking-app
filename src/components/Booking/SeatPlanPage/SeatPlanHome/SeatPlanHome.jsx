import "./SeatPlanHome.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../../../NavBar/NavBar";
import BookingHeader from "../../BookingHeader/BookingHeader";
import SeatPlanBar from "../SeatPlanBar/SeatPlanBar";

const SeatPlanHome = () => {
  const [movie, setMovie] = useState({});
  const [cinema, setCinema] = useState({})
  const { id, detailsId } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie/" + id).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });

    axios
      .get("http://localhost:4000/api/movie/cinema/" + id)
      .then((response) => {
        const currentCinema = response.data.find(cinema => cinema._id === detailsId)
        setCinema({...currentCinema})
        console.log(cinema);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <BookingHeader movie={movie} cinema={cinema}/>
      <SeatPlanBar />
    </div>
  );
};

export default SeatPlanHome;
