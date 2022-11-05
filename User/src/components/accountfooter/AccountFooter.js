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

function AccountFooter({style}) {
  return (
    <Box className="footer-wrapper" sx={style}>
      <Box className="footer-option-wrapper">
        {footerOptions.map((items, id) => {
          return (
            <Link key={id + "id"} to={items.href} className="footer-option-link">
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


export default AccountFooter;
