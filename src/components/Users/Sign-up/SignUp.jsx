import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="wrapper">
      <div className="conatiner">
        <div className="account-area">
          <div className="account-header text-center">
            <div className="teal">WELCOME</div>
            <p>TO</p>
            <h2 className="title">
              <span>B</span>OOK <span>MY</span> TICKE<span>T</span>
            </h2>
          </div>
          <div className="account-form">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email <span className="mandatory">*</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password<span className="mandatory">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Confirm Password<span className="mandatory">*</span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  I Agree To <a className="terms">The Terms, Privacy Policy</a>{" "}
                  And
                  <a className="terms"> Fees</a>
                </label>
              </div>
              <div className="text-center">
                <button type="submit" className="btn join-btn">
                  SIGN UP
                </button>
                <div className="login-section">
                  Already have a account? <a className="terms" href="/signin">Login</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
