import "./TicketPlanHome.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import NavBar from "../../../NavBar/NavBar";
import BookingHeader from "../../BookingHeader/BookingHeader";
import TicketPlanSearchBar from "../TicketPlanSearchBar/TicketPlanSearchBar";
import TicketPlanSection from "../TicketPlanSection/TicketPlanSection";
import Footer from "../../../Footer/Footer";

const TicketPlanHome = () => {
  const [movie, setMovie] = useState({});
  const [ticketDetails, setTicketDetails] = useState([]);
  const [filteredDetails, setFilteredDetails] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
  const { movieId } = useParams();

  const handleFilterDetails = (city) => {
    console.log(city);
    if (city != null && city != "All") {
      const toFilterDetails = [...ticketDetails].filter(
        (details) => details.city === city
      );
      setFilteredDetails(toFilterDetails);
    } else {
      setFilteredDetails([...ticketDetails]);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie/" + movieId).then((response) => {
      console.log(response.data);
      setMovie(response.data);
    });

    axios
      .get("http://localhost:4000/api/movie/cinema/" + movieId)
      .then((response) => {
        console.log(response.data);
        const theatreDetails = [...response.data];
        const allCities = theatreDetails.map((deatils) => deatils.city);
        const filteredCities = allCities.filter(
          (city, i) => allCities.indexOf(city) === i
        );
        const cities = filteredCities.map((c) => ({ city: c }));
        cities.push({ city: "All" });
        console.log(cities);
        setAvailableCities([...cities]);
        setTicketDetails(response.data);
        setFilteredDetails(response.data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <BookingHeader movie={movie} />
      <TicketPlanSearchBar
        cities={availableCities}
        handleFilterDetails={handleFilterDetails}
      />
      <TicketPlanSection ticketDetails={filteredDetails} />
      <Footer />
    </div>
  );
};

export default TicketPlanHome;
