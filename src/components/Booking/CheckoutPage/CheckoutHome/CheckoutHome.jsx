import { useSelector } from "react-redux"
import { bookingSelector } from "../../../../store/reducers/BookingReducer";
import "./CheckoutHome.scss"

const CheckoutHome = () => {
    const state = useSelector(bookingSelector);
  return (
    <div>
    {
        state.price
    }
    </div>
  )
}

export default CheckoutHome