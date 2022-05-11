import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <section className="successfullSignup">
      <div className="container">
        <div className="borderBox">
          <h1>Hi John, you have successfully joined NichoShop.</h1>
          <div className="textBox">
            <p>An email containing an activation link has been sent to:</p>
            <span>example@domain.com</span>
            <p>
              Please log in your email and click the activation link within 24
              hours to complete your registration.
            </p>
            <Link to={"/"} className="redirectLink">
              I haven’t received the email
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
