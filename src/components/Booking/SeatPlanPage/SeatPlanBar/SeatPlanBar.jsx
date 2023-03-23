import "./SeatPlanBar.scss";

import { Dropdown } from "primereact/dropdown";

import { useState } from "react";
import { useParams } from "react-router-dom";

const SeatPlanBar = ({availableTimings}) => {

  const [selectedTime, setSelectedTime] = useState(null);
  
  const { movieId } = useParams();
  
  return (
    <div className="search-box p-0 text-white">
      <form className="form-container bg-blue border-noround">
        <div className="form-group">
          <div className="flex-center">
            <a className="custom-btn w-10rem  flex-center gap-2" href={`/movie/${movieId}/ticketplan`}>
              {" "}
              <span
                className="pi pi-angle-double-left"
                style={{ fontSize: "1.1rem" }}
              />{" "}
              back
            </a>
          </div>
        </div>
        <div className="form-group flex-row gap-3">
          <div className="pt-1">MON , SEP 06 2020</div>
          <div className="time-dropDown">
            <Dropdown
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.value)}
              options={availableTimings}
              optionLabel="time"
              placeholder="Select a time"
              className="md:w-11rem"
            />
          </div>
        </div>

        <div className="form-group flex-column">
          <div className="text-4xl font-semibold ">05:00</div>
          <div>Mins left</div>
        </div>
      </form>
    </div>
  );
};

export default SeatPlanBar;
