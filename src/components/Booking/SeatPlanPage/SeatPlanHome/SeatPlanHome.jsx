import "./SeatPlanHome.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../../../NavBar/NavBar";
import BookingHeader from "../../BookingHeader/BookingHeader";
import SeatPlanBar from "../SeatPlanBar/SeatPlanBar";
import SeatPlanSection from "../SeatPlanSection/SeatPlanSection";

const SeatPlanHome = () => {
  const [movie, setMovie] = useState({});
  const [cinema, setCinema] = useState({})
  const [availableTimings, setAvailableTimings] = useState([])
  const { movieId, movieDetailsId } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie/" + movieId).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });

    axios
      .get("http://localhost:4000/api/movie/cinema/" + movieId)
      .then((response) => {
        console.log(response.data);
        const currentCinema = response.data.find(cinema => cinema._id === movieDetailsId)
        console.log(currentCinema);
        const cinemaTimings = currentCinema.timings.map((details) => ({time : details.time}));
        setCinema({...currentCinema})
        setAvailableTimings([...cinemaTimings])
        console.log(cinema);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <BookingHeader movie={movie} cinema={cinema}/>
      <SeatPlanBar availableTimings={availableTimings} moviemovieId={movieId}/>
      <SeatPlanSection />
    </div>
  );
};

export default SeatPlanHome;
