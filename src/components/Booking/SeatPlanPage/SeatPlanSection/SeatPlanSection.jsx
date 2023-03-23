import { useState } from "react";

import SeatBookingSummary from "../SeatBookingSummary/SeatBookingSummary";
import SeatLayout from "../SeatLayout/SeatLayout";
import "./SeatPlanSection.scss";

const SeatPlanSection = () => {

  const [seatsState, setSeatsState] = useState({
    seats: [],
    price: 0,
  });

  const handleSelectedSeats = (seatNo, rowName) => {

    const currentSeat = rowName + seatNo;
    const copyOfSelectedSeats = [...seatsState.seats];

    if (copyOfSelectedSeats.includes(currentSeat)) {
      const removeIndex = copyOfSelectedSeats.indexOf(currentSeat);
      copyOfSelectedSeats.splice(removeIndex, 1);
    } else {
      copyOfSelectedSeats.push(currentSeat);
    }

    setSeatsState({
      ...seatsState,
      seats: [...copyOfSelectedSeats],
      price: copyOfSelectedSeats.length * 120,
    });
  };


  return (
    <div className="seat-plan-section">
      <div className="container flex-center">
      <SeatLayout selectedSeats={seatsState.seats} handleSelectedSeats={handleSelectedSeats} />
      <SeatBookingSummary seatsState={seatsState} />
      </div>
    </div>
  );
};

export default SeatPlanSection;
