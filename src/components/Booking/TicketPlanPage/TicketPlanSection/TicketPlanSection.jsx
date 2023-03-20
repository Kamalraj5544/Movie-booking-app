import "./TicketPlanSection.scss";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import { RiEmotionSadLine } from "react-icons/ri";

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
      <div className="">
        <div className="row justify-content-center">
          <div className="col-lg-9 mb-lg-0">
            <ul className="ticket-plan-wrapper">
              {ticketDetails &&
                ticketDetails.map((details) => (
                  <li key={details._id}>
                    <div className="left flex flex-row">
                      <div className="heart-icon">
                        <span className="pi pi-heart-fill"></span>
                        <a className="cinema-name">{details.name}</a>
                      </div>
                      <div className="location-icon flex-center">
                        <span className="pi pi-map-marker"></span>
                      </div>
                    </div>
                    <div className="right">
                      {details.timings &&
                        details.timings.map((timing) => (
                          <a
                            className="movie-timing flex-center"
                            key={timing.movie_id}
                            href={"/movie/"+timing.movie_id+"/seatplan"}
                          >
                            {timing.time}
                          </a>
                        ))}
                    </div>
                  </li>
                ))}


              {ticketDetails && ticketDetails.length === 0 && (
                <div
                  className="flex-center flex-row p-4 shake-effect"
                >
                  <span className="pi bold">
                    <RiEmotionSadLine />
                  </span>
                  <div className="ml-2 mt-2 text-lg flex-center">
                    Sorry no shows found!..
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPlanSection;
