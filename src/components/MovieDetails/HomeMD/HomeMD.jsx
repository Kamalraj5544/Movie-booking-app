import NavBar from "../../NavBar/NavBar";
import CoverMD from "../CoverMD/CoverMD";
import UserReview from "../UserReview/UserReview";

import "./HomeMD.scss";

const HomeMd = () => {

  return (
    <div>
      <NavBar />
      <CoverMD />
      <UserReview />
    </div>
  );
};

export default HomeMd;
