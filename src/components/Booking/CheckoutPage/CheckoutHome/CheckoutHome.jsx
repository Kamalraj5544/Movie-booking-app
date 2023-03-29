import { useSelector } from "react-redux"

import { bookingSelector } from "../../../../store/reducers/BookingReducer";
import NavBar from "../../../NavBar/NavBar";

import "./CheckoutHome.scss"

const CheckoutHome = () => {
    const state = useSelector(bookingSelector);
  return (
    <>
    <NavBar />
    </>
  )
}

export default CheckoutHome