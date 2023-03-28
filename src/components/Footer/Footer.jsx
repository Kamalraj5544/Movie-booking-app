import "./Footer.scss";

import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-bg"></div>
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-container">
            <div className="newsletter-wrapper">
              <div className=" subscribtion-header teal-color">
                subscribe to book my ticket
              </div>
              <div className="subscribtion-subheader">
                to get exclusive benefits
              </div>
              <form className="subscribtion-form">
                <input
                  type="text"
                  placeholder="Your Email Address"
                  className="subscription-email"
                />
                <button className="custom-btn subs-btn">Subscribe</button>
              </form>
              <p>We respect your privacy, so we never share your info</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-area container">
        <div className="footer-top">
          <div className="footer-logo">
            <a href="/">
              <img src={logo} alt="logo-img" />
            </a>
          </div>
          <ul className="links">
            <li>
              <i className="pi pi-facebook"></i>
            </li>
            <li>
              <i className="pi pi-twitter"></i>
            </li>
            <li>
              <i className="pi pi-instagram"></i>
            </li>
            <li>
              <i className="pi pi-google"></i>
            </li>
            <li>
              <i className="pi pi-youtube"></i>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            Copyright © 2020.All Rights Reserved By{" "}
            <span className="teal-color">BOOK MY TICKET</span>
          </div>
          <div className="footer-bottom-right">
            <ul className="links">
              <li>About</li>
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
