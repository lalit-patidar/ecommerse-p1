import React from "react";
import { Link } from "react-router-dom";

import NortonLogo from "../../assets/my-nicho-shop/Norton.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-center">
            Copyright 2017 NichoShop Inc. All rights reserved.{" "}
            <Link className="redirectLink" to="/">
              User agreement
            </Link>
            ,{" "}
            <Link className="redirectLink" to="/">
              Privicy
            </Link>{" "}
            and{" "}
            <Link className="redirectLink" to="/">
              Cookies
            </Link>
            .
          </p>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <img src={NortonLogo} className="notonLogo" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
