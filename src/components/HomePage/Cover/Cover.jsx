import "./Cover.scss";

import Typewriter from "typewriter-effect";

const Cover = () => {
  return (
    <div className="coverContainer">
      <div className="textcontainer">
        <div>
          <h1 className="cover-header">
            GET <span className="teal-color">MOVIE</span> TICKETS
          </h1>
          <h3 className="text-center teal-color pb-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("SAFE")
                  .pause(3000)
                  .deleteAll()
                  .typeString("SECURE")
                  .pause(3000)
                  .deleteAll()
                  .typeString("RELAIBLE TICKETING")
                  .pause(3000)
                  .deleteAll()
                  .typeString("Safe,Secure,Reliable Ticketing")
                  .start();
              }}
            />
          </h3>
        </div>
        <div>
          <p>Buy movie tickets in advance, find movie times</p>
          <p>watch trailers, read movie reviews and much more</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
