import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { bookingSelector } from "../../../../store/reducers/BookingReducer";

import "./SeatBookingSummary.scss";

const SeatBookingSummary = ({ seatsState }) => {

  const {movieId , movieDetailsId } = useParams();

  return (
    <div className="proceed-book">
      <div className="proceed-book-bg"></div>
      <div className="proceed-to-book">
        <div>
          <div className="book-item-header">You Have Choosed Seat</div>
          {seatsState.selectedSeats.map((seat, i) => (
            <span className="all-seats pr-1">
              {seat}
              {i !== seatsState.selectedSeats.length - 1 && ","}
            </span>
          ))}

          {seatsState.selectedSeats.length === 0 && (
            <span className="all-seats">-</span>
          )}
        </div>
        <div>
          <div className="book-item-header">Total Price</div>
          <div className="total-price">Rs.{seatsState.price}</div>
        </div>
        <div>
        <a href={`/movie/${movieId}/checkout/${movieDetailsId}`}>
        <button className="custom-btn">proceed</button>
        </a>
          
        </div>
      </div>
    </div>
  );
};

export default SeatBookingSummary;
