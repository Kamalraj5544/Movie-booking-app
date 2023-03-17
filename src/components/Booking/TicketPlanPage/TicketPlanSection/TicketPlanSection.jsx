import "./TicketPlanSection.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TicketPlanSection = () => {
  const [ticketDetails, setTicketDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/movie/cinema/" + id)
      .then((response) => {
        console.log(response.data);
        setTicketDetails(response.data);
        console.log(ticketDetails);
      });
  }, []);

  return (
    <div className="ticket-plan-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-lg-0">
            <ul className="ticket-plan-wrapper">
              {ticketDetails &&
                ticketDetails.map((details) => (
                  <li key={details._id}>
                    <div className="left flex flex-row">
                      <div className="heart-icon  ml-4 mr-4 ">
                        <span className="pi pi-heart"></span>
                      </div>
                      <a className="ml-4 mr-4 cinema-name ">{details.name}</a>
                      <div className="location-icon flex-center  ml-4 mr-4">
                        <span className="pi pi-map-marker"></span>
                      </div>
                    </div>
                    <div className="right">
                      {details.timings &&
                        details.timings.map((timing) => (
                          <a
                            className="movie-timing flex-center"
                            key={timing._id}
                          >
                            {timing.time}
                          </a>
                        ))}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPlanSection;
