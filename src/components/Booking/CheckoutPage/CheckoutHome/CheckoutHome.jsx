import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import NavBar from "../../../NavBar/NavBar";
import Footer from "../../../Footer/Footer";
import BookingHeader from "../../BookingHeader/BookingHeader";
import SeatPlanBar from "../../SeatPlanPage/SeatPlanBar/SeatPlanBar";

import "./CheckoutHome.scss"
import CheckoutSection from "../CheckoutSection/CheckoutSection";

const CheckoutHome = () => {
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
        const currentCinema = response.data.find(cinema => cinema._id === movieDetailsId)
        const cinemaTimings = currentCinema.timings.map((details) => ({time : details.time}));
        setCinema({...currentCinema})
        setAvailableTimings([...cinemaTimings])
      });
  }, []);

  return (
    <>
    <NavBar />
    <BookingHeader movie={movie} cinema={cinema} />
    <SeatPlanBar availableTimings={availableTimings} />
    <CheckoutSection movie={movie} cinema={cinema} />
    <Footer />
    </>
  )
}

export default CheckoutHome