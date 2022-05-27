import React from "react";

import Logo from "../logo/Logo";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-12 col-md-4 col-4">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
