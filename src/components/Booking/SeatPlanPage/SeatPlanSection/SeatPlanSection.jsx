import { useState } from "react";
import { useDispatch } from "react-redux";

import { bookingActions } from "../../../../store/reducers/BookingReducer";

import SeatBookingSummary from "../SeatBookingSummary/SeatBookingSummary";
import SeatLayout from "../SeatLayout/SeatLayout";
import "./SeatPlanSection.scss";

const SeatPlanSection = () => {
  const dispatch = useDispatch();

  const [seatsState, setSeatsState] = useState({
    seats: [],
    price: 0,
  });

  const handleSelectedSeats = (seatNo) => {
    // Below is for state management in component layout :

    // const copyOfSelectedSeats = [...seatsState.seats];
    // if (copyOfSelectedSeats.includes(seatNo)) {
    //   const removeIndex = copyOfSelectedSeats.indexOf(seatNo);
    //   copyOfSelectedSeats.splice(removeIndex, 1);
    // } else {
    //   copyOfSelectedSeats.push(seatNo);
    // }
    // setSeatsState({
    //   ...seatsState,
    //   seats: [...copyOfSelectedSeats],
    //   price: copyOfSelectedSeats.length * 120,
    // });


    //below logic is for state management using redux :

    dispatch(bookingActions.selectFunc(seatNo))

  };

  return (
    <div className="seat-plan-section">
      <div className="container flex-center">
        <SeatLayout
          selectedSeats={seatsState.seats}
          handleSelectedSeats={handleSelectedSeats}
        />
        <SeatBookingSummary seatsState={seatsState} />
      </div>
    </div>
  );
};

export default SeatPlanSection;
