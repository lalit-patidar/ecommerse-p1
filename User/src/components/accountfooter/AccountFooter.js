import React from "react";
import "./AccountFooter.css";
import {Link} from "react-router-dom"


const footerOptions = [
    {
        name: "About us",
        href: ''
    },
    {
        name: "Safty center",
        href: ''
    },
    {
        name: "Policies",
        href: ''
    },
    {
        name: "Help Contact",
        href: ''
    }
]

function AccountFooter() {
  return (
    <footer id="footer">
      <div className="footer-menu">
          <div className="footer-menu-wrpr">
          {footerOptions.map(items => {
            return ( <Link to={items.href} className="footer-option-link">
             {items.name}
          </Link>)
           })}
          </div>
      </div>
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright-wrpr">
          {" "}
          &copy; Copyright 2017 nichoShop Inc. All Rights
          Reserved. User Agreement, Privicy {" "}
         Cookies
        </div>
      </div>
    </footer>
  );
}

export default AccountFooter;
