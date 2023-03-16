import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TicketPlanHome from "../Booking/TicketPlanPage/TicketPlanHome/TicketPlanHome";
import Home from "../HomePage/Home/Home";
import HomeMd from "../MovieDetails/HomeMD/HomeMd";
import SignIn from "../Users/Sign-in/SignIn";
import SignUp from "../Users/Sign-up/SignUp";

const RouteingPages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movie/:id" element={<HomeMd />} />
        <Route path="/movie/:id/ticketplan" element={<TicketPlanHome />} />
      </Routes>
    </Router>
  );
};

export default RouteingPages;
