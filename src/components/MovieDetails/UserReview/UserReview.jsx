import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { TabView, TabPanel } from "primereact/tabview";
import { Avatar } from "primereact/avatar";

import "./UserReview.scss";

const UserReview = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:4000/api/movie").then((response) => {
      console.log(response.data);
      const clickedMovie = response.data.find((m) => m._id === id);
      console.log(clickedMovie);
      setMovie({ ...clickedMovie });
      console.log(movie);
    });
  }, []);

  return (
    <div className="container">
      <TabView>
        <TabPanel header="Summary">
          <h2>Description</h2>
          <p>{movie.description}</p>

          <div className="flex">
            <h3>IMDB Rating</h3>
            <h3> - {movie.rating}</h3>
          </div>
        </TabPanel>
        <TabPanel header="User review(87)">
          {movie.userReviews &&
            movie.userReviews.map((review, i) => (
              <div
                className="user-review-container flex flex-wrap"
                key={i + review}
              >
                <div className="user-details-container">
                  <div className="user-img">
                    <Avatar
                      image={review.userProfilePicUrl}
                      size="xlarge"
                      shape="circle"
                    />
                  </div>
                  <div className="user-details">
                    <h2>{review.name}</h2>
                    <div>{review.date}</div>
                    <div>
                      <span className="pi pi-check-circle"></span> Verfied
                      review
                    </div>
                  </div>
                </div>
                <div className="movie-review-container">
                  <div className="rate-it">
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                  </div>
                  <h4>Awesome Movie</h4>
                  <div>{review.comment}</div>
                </div>
              </div>
            ))}
        </TabPanel>
      </TabView>
    </div>
  );
};

export default UserReview;
