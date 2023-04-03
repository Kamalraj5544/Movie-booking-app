import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../HomePage/Home/Home";
import HomeMd from "../MovieDetails/HomeMD/HomeMd";
import SignIn from "../Users/Sign-in/SignIn";
import SignUp from "../Users/Sign-up/SignUp";
import SeatPlanHome from "../Booking/SeatPlanPage/SeatPlanHome/SeatPlanHome";
import TicketPlanHome from "../Booking/TicketPlanPage/TicketPlanHome/TicketPlanHome";
import CheckoutHome from "../Booking/CheckoutPage/CheckoutHome/CheckoutHome";

const RouteingPages = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/movie/:movieId" element={<HomeMd />} />
          <Route
            path="/movie/:movieId/ticketplan"
            element={<TicketPlanHome />}
          />
          <Route
            path="/movie/:movieId/seatplan/:movieDetailsId"
            element={<SeatPlanHome />}
          />
          <Route
            path="/movie/:movieId/checkout/:movieDetailsId"
            element={<CheckoutHome />}
          />
        </Routes>
      </Router>
  );
};

export default RouteingPages;
