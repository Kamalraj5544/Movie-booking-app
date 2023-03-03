import "./Cover.scss";

const Cover = () => {
  return (
    <div className="coverContainer">
      <div className="bg-img"></div>
      <div className="textcontainer">
        <h1 className="cover-header">
          GET <span className="teal-color">MOVIE</span> TICKETS
        </h1>
        <p>Buy movie tickets in advance, find movie times</p>
        <p>watch trailers, read movie reviews and much more</p>
      </div>
    </div>
  );
};

export default Cover;
