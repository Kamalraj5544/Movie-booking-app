import "./CheckoutSection.scss"

const CheckoutSection = () => {
  return (
    <div className="checkout-section">
        <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="checkout-widget checkout-signin">
                    <div className="title-area">
                        <h4 className="widget-title">Already a Boleto Member?</h4>
                        <p className="m-0">Sign in to earn points and make booking easier!</p>
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
                        <input type="text" placeholder="Full Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Enter your Mail"/>
                    </div>
                    <div className="form-group">
                        <input type="tel" placeholder="Enter your Phone Number"/>
                    </div>
                    <div className="form-group">
                        <button className="custom-btn">Continue</button>
                    </div>
                    </form>
                </div>
                <div className="checkout-widget"></div>
                <div className="checkout-widget"></div>
            </div>
            <div className="col-md-4"></div>
        </div>
        </div>
    </div>
  )
}

export default CheckoutSection