import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Providers } from "react-redux";

import { store } from "../../store/store";

import Home from "../HomePage/Home/Home";
import HomeMd from "../MovieDetails/HomeMD/HomeMd";
import SignIn from "../Users/Sign-in/SignIn";
import SignUp from "../Users/Sign-up/SignUp";
import SeatPlanHome from "../Booking/SeatPlanPage/SeatPlanHome/SeatPlanHome";
import TicketPlanHome from "../Booking/TicketPlanPage/TicketPlanHome/TicketPlanHome";

const RouteingPages = () => {
  return (
    <Providers store={store} >
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
        </Routes>
      </Router>
    </Providers>
  );
};

export default RouteingPages;
