import "./SeatLayout.scss";

import { useState } from "react";

import screenImg from "../../../../assets/Movies/screen-img.png";
import seatImg from "../../../../assets/Movies/seatImg.png";
import blockedSeatImg from "../../../../assets/Movies/seatImg-blocked.png";

const SeatLayout = ({selectedSeats,handleSelectedSeats}) => {


  const [seatsFour1, setSeatsFour1] = useState([1, 2, 3, 4]);
  const [seatsSix, setSeatsSix] = useState([5, 6, 7, 8, 9, 10]);
  const [seatsFour2, setSeatsFour2] = useState([11, 12, 13, 14]);

  const [silverRow, setSilverRow] = useState(["H", "G"]);
  const [goldRow, setGoldRow] = useState(["F", "E", "D", "C", "B", "A"]);



  return (
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
                        <img
                          src={
                            selectedSeats.includes(rowName + seatNo)
                              ? blockedSeatImg
                              : seatImg
                          }
                          alt="seat-img"
                        />
                        {selectedSeats.includes(rowName + seatNo) && (
                          <span className="seatNo">{rowName + seatNo}</span>
                        )}
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
                        <img
                          src={
                            selectedSeats.includes(rowName + seatNo)
                              ? blockedSeatImg
                              : seatImg
                          }
                          alt="seat-img"
                        />
                        {selectedSeats.includes(rowName + seatNo) && (
                          <span className="seatNo">{rowName + seatNo}</span>
                        )}
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
                        <img
                          src={
                            selectedSeats.includes(rowName + seatNo)
                              ? blockedSeatImg
                              : seatImg
                          }
                          alt="seat-img"
                        />
                        {selectedSeats.includes(rowName + seatNo) && (
                          <span className="seatNo">{rowName + seatNo}</span>
                        )}
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
                        <img
                          src={
                            selectedSeats.includes(rowName + seatNo)
                              ? blockedSeatImg
                              : seatImg
                          }
                          alt="seat-img"
                        />
                        {selectedSeats.includes(rowName + seatNo) && (
                          <span className="seatNo">{rowName + seatNo}</span>
                        )}
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
                        <img
                          src={
                            selectedSeats.includes(rowName + seatNo)
                              ? blockedSeatImg
                              : seatImg
                          }
                          alt="seat-img"
                        />
                        {selectedSeats.includes(rowName + seatNo) && (
                          <span className="seatNo">{rowName + seatNo}</span>
                        )}
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
                        <img
                          src={
                            selectedSeats.includes(rowName + seatNo)
                              ? blockedSeatImg
                              : seatImg
                          }
                          alt="seat-img"
                        />
                        {selectedSeats.includes(rowName + seatNo) && (
                          <span className="seatNo">{rowName + seatNo}</span>
                        )}
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
  );
};

export default SeatLayout;
