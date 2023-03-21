import "./SeatPlanBar.scss";

import { Dropdown } from "primereact/dropdown";

import { useState } from "react";

const SeatPlanBar = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const cinemaTimings = [
    { time: "10:00AM" },
    { time: "02:00PM" },
    { time: "05:00PM" },
    { time: "09:00PM" },
  ];

  return (
    <div className="search-box p-0 text-white">
      <form className="form-container bg-blue border-noround">
        <div className="form-group">
          <div className="flex-center">
            <button className="custom-btn w-10rem  flex-center gap-2">
              {" "}
              <span
                className="pi pi-angle-double-left"
                style={{ fontSize: "1.1rem" }}
              />{" "}
              back
            </button>
          </div>
        </div>
        <div className="form-group flex-row gap-3">
          <div className="pt-1">MON , SEP 06 2020</div>
          <div className="time-dropDown">
            <Dropdown
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.value)}
              options={cinemaTimings}
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
