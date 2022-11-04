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
import "./accountchangeyourname.scss";

const AccountChangeYourName = () => {
  const [userName, setUserName] = useState("");
  const [canSubmitForm, setCanFormSubmit] = useState(true);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setUserName(value);
    setCanFormSubmit(true);
  };

  const submitUserNameHandler = () => {
    if (!userName) {
      setCanFormSubmit(false);
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
        <Typography className="change-heading">Change your username</Typography>

        <Divider sx={{ marginY: "20px", height: 1.5, borderColor: "black" }} />
        <Typography className="change-caption">
          <span style={{ fontWeight: 600, color: "#81818F" }}>
            Current username
          </span>
          : username <br />
          You can only change your username on every 30 days.
        </Typography>
        <Stack className="text-field-wrapper">
          <Box className="input-box-wrapper">
            <TextField
              id="outlined-basic"
              label="New NichoShop username"
              variant="outlined"
              className="text-field-input"
              error={!canSubmitForm}
              onChange={handleChangeInput}
              value={userName}
            />
            <span className="input-error-lable">
              {!canSubmitForm && "Enter Password"}
            </span>
          </Box>
          <Button
            variant="contained"
            className="change-submit-btn"
            onClick={submitUserNameHandler}
          >
            Save changes
          </Button>
        </Stack>
      </Box>
      <AccountFooter />
    </Box>
  );
};

export default AccountChangeYourName;
