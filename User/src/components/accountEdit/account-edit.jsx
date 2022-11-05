import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popover from "@mui/material/Popover";

export default function AccountEdit({
  title,
  caption,
  address,
  redirect,
  type,
}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <Box>
      <Grid container sx={{ padding: "20px" }}>
        <Grid item xl={9} lg={9} md={9} sm={9} xs={9}>
          <Box>
            <Typography sx={{ color: "gray", fontSize: "8px" }}>
              {title}
            </Typography>
            <Typography
              variant="p"
              sx={{ fontWeight: "bold", fontSize: "18px" }}
            >
              {type === "phoneNumber" && !caption ? (
                <Link
                  to=""
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  Why add a mobile number?
                </Link>
              ) : type === "address" && !caption ? (
                "Your Default Contact Address"
              ) : (
                caption
              )}
            </Typography>
            {type === "phoneNumber" && (
              <Popover
                id="mouse-over-popover"
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: "right",
                  horizontal: "right",
                }}
                sx={{
                    pointerEvents: 'none',
                  }}
                PaperProps={{
                  style: {
                    backgroundColor: "transparent",
                    borderRadius: 0,
                  },
                  
                }}
                hideBackdrop
              >
                <Box
                  sx={{
                    position: "relative",
                    mt: "10px",
                    "&::before": {
                      backgroundColor: "white",
                      content: '""',
                      display: "block",
                      position: "absolute",
                      width: 12,
                      height: 12,
                      left: 0,
                      top: "20px",
                      transform: "rotate(45deg)",
                    },
                  }}
                />
                <Typography sx={{ p: 2, backgroundColor: "white" }}>
                  The content of the Popover.
                </Typography>
              </Popover>
            )}
          </Box>
        </Grid>
        <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
          <Button
            variant="contained"
            sx={{ width: "60%", padding: "10px" }}
            onClick={() => navigate("/account/change-your-name")}
          >
            {(type === "phoneNumber" || type === "address") ? "Add" : "Edit"}
          </Button>
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}
