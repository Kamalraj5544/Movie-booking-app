import "./TicketPlanHome.scss";

import NavBar from "../../../NavBar/NavBar";
import TicketPlanHeader from "../TicketPlanHeader/TicketPlanHeader";
import TicketPlanSearchBar from "../TicketPlanSearchBar/TicketPlanSearchBar";
import TicketPlanSection from "../TicketPlanSection/TicketPlanSection";

const TicketPlanHome = () => {
  return (
    <div>
      <NavBar />
      <TicketPlanHeader />
      <TicketPlanSearchBar />
      <div className="container">
        <TicketPlanSection />
      </div>
    </div>
  );
};

export default TicketPlanHome;
