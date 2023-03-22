import "./SeatPlanSection.scss";

import { useState } from "react";

import screenImg from "../../../../assets/Movies/screen-img.png";
import seatImg from "../../../../assets/Movies/seatImg.png";

const SeatPlanSection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [seatsFour1, setSeatsFour1] = useState([1, 2, 3, 4]);
  const [seatsSix, setSeatsSix] = useState([5, 6, 7, 8, 9, 10]);
  const [seatsFour2, setSeatsFour2] = useState([11, 12, 13, 14]);

  const [silverRow, setSilverRow] = useState(["H", "G"]);
  const [goldRow, setGoldRow] = useState(["F", "E", "D", "C", "B", "A"]);

  const handleSelectedSeats = (seatNo, rowName) => {
    const currentSeat = rowName + seatNo;
    const isPresent = selectedSeats.findIndex((seat) => currentSeat === seat);

    if (isPresent === -1) {
      setSelectedSeats([...selectedSeats, currentSeat]);
      setTotalPrice(selectedSeats.length * 120);
      return;
    }

    const updatedSeats = selectedSeats.filter((seat) => seat !== currentSeat);
    setSelectedSeats(updatedSeats);
    setTotalPrice(selectedSeats.length * 120);
    return;
  };

  return (
    <div className="seat-plan-section">
      <div className="container flex-center flex-column">
        <div className="screen-area">
          <div className="screen">screen</div>
          <div className="screen-img flex-center">
            <img src={screenImg} alt="screen-img" />
          </div>
          <div className="screen teal-color text-3xl">Silver plus</div>
          <div className="screen-wrapper">
            <ul className="seat-area">
              {silverRow.map((rowName) => (
                <li className="seat-line">
                  <span>{rowName}</span>
                  <ul className="seat--area">
                    <li className="front-line">
                      <ul>
                        {seatsFour1.map((seatNo) => (
                          <li
                            className="single-seat"
                            onClick={() => handleSelectedSeats(seatNo, rowName)}
                          >
                            <img src={seatImg} alt="seat-img" />
                            <span className="seatNo">{rowName + seatNo}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="front-line">
                      <ul>
                        {seatsSix.map((seatNo) => (
                          <li
                            className="single-seat"
                            onClick={() => handleSelectedSeats(seatNo, rowName)}
                          >
                            <img src={seatImg} alt="seat-img" />
                            <span className="seatNo">{rowName + seatNo}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="front-line">
                      <ul>
                        {seatsFour2.map((seatNo) => (
                          <li
                            className="single-seat"
                            onClick={() => handleSelectedSeats(seatNo, rowName)}
                          >
                            <img src={seatImg} alt="seat-img" />
                            <span className="seatNo">{rowName + seatNo}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <span>{rowName}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="screen teal-color text-3xl">Gold plus</div>

          <div className="screen-wrapper">
            <ul className="seat-area">
              {goldRow.map((rowName) => (
                <li className="seat-line">
                  <span>{rowName}</span>
                  <ul className="seat--area">
                    <li className="front-line">
                      <ul>
                        {seatsFour1.map((seatNo) => (
                          <li
                            className="single-seat"
                            onClick={() => handleSelectedSeats(seatNo, rowName)}
                          >
                            <img src={seatImg} alt="seat-img" />
                            <span className="seatNo">{rowName + seatNo}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="front-line">
                      <ul>
                        {seatsSix.map((seatNo) => (
                          <li
                            className="single-seat"
                            onClick={() => handleSelectedSeats(seatNo, rowName)}
                          >
                            <img src={seatImg} alt="seat-img" />
                            <span className="seatNo">{rowName + seatNo}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="front-line">
                      <ul>
                        {seatsFour2.map((seatNo) => (
                          <li
                            className="single-seat"
                            onClick={() => handleSelectedSeats(seatNo, rowName)}
                          >
                            <img src={seatImg} alt="seat-img" />
                            <span className="seatNo">{rowName + seatNo}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                  <span>{rowName}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="proceed-book">
          <div className="proceed-book-bg"></div>
          <div className="proceed-to-book">
            <div>
              <div className="book-item-header">Selected Seats</div>
              {selectedSeats.map((seat, i) => (
                <span className="all-seats pr-1">
                  {seat}
                  {i !== selectedSeats.length - 1 && ","}
                </span>
              ))}

              {selectedSeats.length === 0 && (
                <span className="all-seats">-</span>
              )}
            </div>
            <div>
              <div className="book-item-header">Total Price</div>
              <div className="total-price">Rs.{totalPrice}</div>
            </div>
            <div>
              <button className="custom-btn">proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatPlanSection;
