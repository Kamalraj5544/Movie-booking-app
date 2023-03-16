import "./TicketPlanSearchBar";

import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

import { useState } from "react";

const TicketPlanSearchBar = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [date, setDate] = useState(null);

  return (
    <div>
      <div className="search-box p-0 ">
        <form className="form-container bg-blue box-none border-noround">
          {/* <div className="form-group">
            <div className="search-input">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search for Movies" />
              </span>
            </div>
          </div> */}
          <div className="form-group">
            <span className="teal-color form-header">
              <span className="pi pi-building" style={{ fontSize: "1.3rem" }} />{" "}
              City:
            </span>
            <div className="city-dropDown">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="md:w-11rem"
              />
            </div>
          </div>
          <div className="form-group ">
            <span className="teal-color form-header">
              <span className="pi pi-calendar" style={{ fontSize: "1.3rem" }} />{" "}
              Date:
            </span>
            <div className="date-dropDown">
              <Calendar
                value={date}
                placeholder="Select a Date"
                onChange={(e) => setDate(e.value)}
                // showIcon
                touchUI
                className="md:w-11rem"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketPlanSearchBar;
