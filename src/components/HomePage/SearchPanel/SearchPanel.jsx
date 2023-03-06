import "./SearchPanel.scss";

import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

import { useState } from "react";

import { BsSearch } from "react-icons/bs";

const SearchPanel = () => {
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
    <div className="search-ticket-section">
      <div className="container">
        <div className="search-section-bgImg"></div>
        <div className="search-header text-center">
          <p className="welcome-section">
            <span className="teal-color">WELCOME TO BOOK MY TICKET </span>
            {/* <span className="red-color">B</span>OOK{" "}
            <span className="red-color">MY</span> TICKE
            <span className="red-color">T</span> */}
          </p>
          <p>WHAT ARE YOU LOOKING FOR</p>
        </div>
        <div className="search-box container">
          <form className="form-container">
            <div className="form-group">
              <div className="search-input">
                <input
                  type="text"
                  placeholder="Search for Movies"
                  className="input-box"
                />
                <span>
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="form-group">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="w-full md:w-14rem "
              />
            </div>
            <div className="form-group ">
              <Calendar
                value={date}
                placeholder="Select a Date"
                onChange={(e) => setDate(e.value)}
                showIcon
                className="w-full md:w-14rem"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
