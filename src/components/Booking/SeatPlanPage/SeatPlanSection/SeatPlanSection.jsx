import { useDispatch, useSelector } from "react-redux";

import {
  bookingSelector,
  selectSeatFunc,
  removeSeatFunc,
} from "../../../../store/reducers/BookingReducer";

import SeatBookingSummary from "../SeatBookingSummary/SeatBookingSummary";
import SeatLayout from "../SeatLayout/SeatLayout";
import "./SeatPlanSection.scss";

const SeatPlanSection = () => {

  const dispatch = useDispatch();
  const seatsState = useSelector(bookingSelector);

  console.log(seatsState)

  // const [seatsState, setSeatsState] = useState({
  //   seats: [],
  //   price: 0,
  // });

  const handleSelectedSeats = (seatNo) => {

    // Below logic is for managing state in component layout :

    /*
    const copyOfSelectedSeats = [...seatsState.seats];
    if (copyOfSelectedSeats.includes(seatNo)) {
      const removeIndex = copyOfSelectedSeats.indexOf(seatNo);
      copyOfSelectedSeats.splice(removeIndex, 1);
    } else {
      copyOfSelectedSeats.push(seatNo);
    }
    setSeatsState({
      ...seatsState,
      seats: [...copyOfSelectedSeats],
      price: copyOfSelectedSeats.length * 120,
    });
    */

    //Below logic is for state management using redux :

    if (seatsState.selectedSeats.includes(seatNo)) {
      dispatch(removeSeatFunc(seatNo));
    } else {
      dispatch(selectSeatFunc(seatNo));
    }
  };

  return (
    <div className="seat-plan-section">
      <div className="container flex-center">
        <SeatLayout
          selectedSeats={seatsState.selectedSeats}
          handleSelectedSeats={handleSelectedSeats}
        />
        <SeatBookingSummary seatsState={seatsState} />
      </div>
    </div>
  );
};

export default SeatPlanSection;
