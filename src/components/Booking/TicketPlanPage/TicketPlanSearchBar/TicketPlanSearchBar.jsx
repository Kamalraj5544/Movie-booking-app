import "./TicketPlanSearchBar";

import { Dropdown } from "primereact/dropdown";

import { useState } from "react";

const TicketPlanSearchBar = ({ cities, handleFilterDetails }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const dates = [
    { date: "24 / 03 / 2023" },
    { date: "25 / 03 / 2023" },
    { date: "26 / 03 / 2023" },
    { date: "27 / 03 / 2023" },
    { date: "28/ 03 / 2023" },
    { date: "29 / 03 / 2023" },
  ];

  return (
    <div className="search-box p-0">
      <form className="form-container bg-blue border-noround">
        <div className="form-group">
          <span className="teal-color form-header ">
            <span className="pi pi-building " style={{ fontSize: "1.3rem" }} />{" "}
            City
          </span>
          <div className="city-dropDown">
            <Dropdown
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.value);
                handleFilterDetails(e.value.city)
              }}
              options={cities}
              optionLabel="city"
              placeholder="Select a City"
              className="md:w-11rem"
            />
          </div>
        </div>
        <div className="form-group ">
          <span className="teal-color form-header">
            <span className="pi pi-calendar" style={{ fontSize: "1.3rem" }} />{" "}
            Date
          </span>
          <div className="date-dropDown">
            <Dropdown
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value)}
              options={dates}
              optionLabel="date"
              placeholder="Select a Date"
              className="md:w-11rem"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default TicketPlanSearchBar;
