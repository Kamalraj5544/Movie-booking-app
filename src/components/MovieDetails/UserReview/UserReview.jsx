import { TabView, TabPanel } from "primereact/tabview";
import { Avatar } from "primereact/avatar";

import "./UserReview.scss";

const UserReview = ({ movie }) => {

  return (
    <div className="container">
      <TabView>
        <TabPanel header="Summary">
          <h3 className="pb-3 uppercase">Description</h3>
          <p className="lightBlue">{movie.description}</p>

          <div className="flex uppercase">
            <h3>IMDB Rating -</h3>
            <h4 className="m-0 pt-1 pb-1 ml-2 lightBlue teal-color">
              {movie.rating}/10
            </h4>
          </div>
        </TabPanel>
        <TabPanel header="User review(87)">
          {movie.userReviews &&
            movie.userReviews.map((review, i) => (
              <div
                className="user-review-container flex flex-wrap border-bottom-1 pb-4 pt-5"
                key={i + review}
              >
                <div className="user-details-container flex flex-wrap">
                  <div className="user-img pr-6">
                    <Avatar
                      image={review.userProfilePicUrl}
                      size="xlarge"
                      shape="circle"
                    />
                  </div>
                  <div className="user-details pr-8">
                    <h2 className="pb-3 m-0 username">{review.name}</h2>
                    <div className="pb-2 lightBlue">{review.date}</div>
                    <div className="verified-user pb-4 lightBlue">
                      <span className="pi pi-check-circle"></span> Verfied
                      Review
                    </div>
                  </div>
                </div>
                <div className="movie-review-container">
                  <div className="rated m-0">
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                    <i className="pi pi-heart-fill"></i>
                  </div>
                  <h4>Awesome Movie</h4>
                  <div className="lightBlue">{review.comment}</div>
                </div>
              </div>
            ))}
        </TabPanel>
      </TabView>
    </div>
  );
};

export default UserReview;
