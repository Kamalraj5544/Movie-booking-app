import "./SeatPlanSection.scss"

import screenImg from "../../../../assets/screen-img.png"

const SeatPlanSection = () => {
  return (
    <div className="seat-plan-section">
        <div className="container flex-center flex-column">
            <div className="screen-area ">
                <div className="screen">
                    screen
                </div>
                <div className="screen-img">
                    <img src={screenImg} alt="screen-img" />
                </div>
                <div className="screen teal-color text-3xl">
                    Silver plus
                </div>
                <div className="screen-wrapper">
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="proceed-book"></div>
        </div>
    </div>
  )
}

export default SeatPlanSection