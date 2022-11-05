import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { useState } from "react";
import AccountFooter from "../../../../components/accountfooter/AccountFooter";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";
import "./update-email-id.scss";
import showToast from "../../../../helper/toasts/toasts";
import ToastError from "../../../../assets/form-social/toast_error.png";

const UpdateEmailId = () => {
  const [emailId, setEmailId] = useState("");
  const [canSubmitForm, setCanFormSubmit] = useState(true);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setEmailId(value);
    setCanFormSubmit(true);
  };

  const submitEmailIdHandler = () => {
    if (!emailId) {
      setCanFormSubmit(false);
      const toastStyle = {
        background: "#FFF0F0",
        size: 10,
        color: "#FF6666",
      };
      showToast("Enter New Name", toastStyle, ToastError);
    } else {
      setCanFormSubmit(true);
      alert("form has submited");
    }
  };
  return (
    <Box className="account-change-wrapper">
      <Box className="ui-common-logo">
        <Logo />
      </Box>
      <Box className="account-content-wrapper">
        <Typography className="change-heading">Change your email address</Typography>

        <Divider sx={{ marginY: "20px", height: 1.5, borderColor: "black" }} />
        <Typography className="change-caption">
          <span style={{ fontWeight: 600, color: "#81818F" }}>
            Current email
          </span>
          : example@domain.com <br />
           A valid email address is requiered to bid, buy and
          sell with us.       
        </Typography>
        <Typography className="change-caption">
        Enter the new email address you would like to associate  with your account below. We will send a Single-Use Code (SUC) to that address.
        </Typography>
        <Stack className="text-field-wrapper">
          <Box className="input-box-wrapper">
            <TextField
              id="outlined-basic"
              label="New email address"
              variant="outlined"
              className="text-field-input"
              error={!canSubmitForm}
              onChange={handleChangeInput}
              value={emailId}
            />
          </Box>
          <Button
            variant="contained"
            className="change-submit-btn"
            onClick={submitEmailIdHandler}
          >
            Save changes
          </Button>
        </Stack>
      </Box>
      <AccountFooter />
    </Box>
  );
};

export default UpdateEmailId;
