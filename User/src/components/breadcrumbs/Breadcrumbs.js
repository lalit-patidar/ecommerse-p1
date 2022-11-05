import React from "react";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function MyBreadcrumbs({ links, lastElemTitle }) {
  console.log(links, "links", "other", lastElemTitle);
  if (!links) return null;

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {links
        .map((item, index) => (
          <Link underline="hover" key="2" color="inherit" to="/account/change-your-name">
            {item.title}
          </Link>
        ))
        .concat([
          <Typography key="3" color="text.primary">
            {lastElemTitle}
          </Typography>,
        ])}
    </Breadcrumbs>
  );
}

export default MyBreadcrumbs;
