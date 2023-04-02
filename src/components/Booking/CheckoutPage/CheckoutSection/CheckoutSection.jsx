import "./CheckoutSection.scss";

const CheckoutSection = () => {
  return (
    <div className="checkout-section">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="checkout-widget checkout-signin">
              <div className="title-area">
                <h4>Already a Boleto Member?</h4>
                <p className="m-0">
                  Sign in to earn points and make booking easier!
                </p>
              </div>
              <a href="/signin" className="signin-area">
                <i className="pi pi-user-edit user-icon"></i>
                <span>Sign-in</span>
              </a>
            </div>
            <div className="checkout-widget checkout-contact">
              <h4 className="widget-title">Share your Contact Details</h4>
              <form className="checkout-contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Enter your Mail" />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Enter your Phone Number" />
                </div>
                <div className="form-group">
                  <button className="custom-btn">Continue</button>
                </div>
              </form>
            </div>
            <div className="checkout-widget checkout-contact">
              <h4 className="widget-title">Promo Code</h4>
              <form className="checkout-contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Please enter promo code" />
                </div>
                <div className="form-group">
                  <button className="custom-btn">Verify</button>
                </div>
              </form>
            </div>
            <div className="checkout-widget checkout-payment">
              <h4 className="widget-title">Enter your Card Details</h4>
              <form className="payment-form">
                <div className="form-group w-full">
                  <label>12-digit Card Number</label>
                  <input type="text" />
                </div>
                <div className="form-group w-full">
                  <label>Name on the Card</label>
                  <input type="text" />
                </div>
                <div className="form-group">
                  <label>Expiration</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="CVV" />
                </div>
                <div className="form-group w-full">
                  <div className="check-group">
                    <input type="checkbox" />
                    <label>
                      <div className="checkbox-title">QuickPay</div>
                      <span>
                        Save this card information to my Boleto account and make
                        faster payments.
                      </span>
                    </label>
                  </div>
                </div>
                <div className="form-group w-full">
                  <button className="custom-btn">Make Payment</button>
                </div>
              </form>
              <p>
                By Clicking "Make Payment" you agree to{" "}
                <span className="teal-color">the Terms and conditions</span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="booking-payment-details">
              <h3 className="widget-title text-center">BOOKING SUMMARY</h3>
              <ul>
                <li>
                  <h5 className="subTitle">Venus</h5>
                  <span>2D</span>
                </li>
                <li>
                  <h5 className="subTitle">
                    <div>CITY WALK</div>
                    <div>02</div>
                  </h5>
                  <div className="info">
                    <span>10 SEP TUE, 11:00 PM</span>
                    <span>Tickets</span>
                  </div>
                </li>
                <li>
                  <h5 className="subTitle">
                    <div>tickets price</div>
                    <div>RS.150</div>
                  </h5>
                </li>
              </ul>
              <ul className="side-shape">
                <li>
                  <span className="info">
                    <span>total price</span>
                    <span>Rs.300</span>
                  </span>
                  <span className="info">
                    <span>GST</span>
                    <span>Rs.6</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="total-payment-area text-center">
              <h5 className="subTitle">
                <span>Amount Payable</span>
                <span>Rs.306</span>
              </h5>
              <button className="custom-btn">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
