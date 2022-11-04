import React from "react";
import "./AccountFooter.scss";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

const footerOptions = [
  {
    name: "About us",
    href: "",
  },
  {
    name: "Safty center",
    href: "",
  },
  {
    name: "Policies",
    href: "",
  },
  {
    name: "Help Contact",
    href: "",
  },
];

function AccountFooter() {
  return (
    <Box className="footer-wrapper">
      <Box className="footer-option-wrapper">
        {footerOptions.map((items) => {
          return (
            <Link to={items.href} className="footer-option-link">
              {items.name}
            </Link>
          );
        })}
      </Box>
      <Box>
        <Typography>
          {" "}
          &copy; Copyright 2017 nichoShop Inc. All Rights Reserved.<span style={{marginLeft: 10}}><Link href="/sign-up">User Agreement,</Link></span>
          <span><Link href="/sign-up"> Privicy </Link></span>
           and 
          <span><Link href="/sign-up"> Cookies </Link></span>
        </Typography>
      </Box>
    </Box>
  );
}

{
  /* <footer id="footer">
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
</footer> */
}

export default AccountFooter;
