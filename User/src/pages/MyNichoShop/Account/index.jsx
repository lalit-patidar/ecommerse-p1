import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs,
  FormControl,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";

// Compoenents
import Menu from "../../../components/menu/Menu";

// Styles
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import AccountFooter from "../../../components/accountfooter/AccountFooter";
import { getLocalstore } from "../../../helper/localstore/localstore";
import "./account.css";
import BusinessInformation from "./Components/BusinessInformation";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AccountEdit from "../../../components/accountEdit/account-edit";
import {useSelector} from "react-redux"

const userData = [
  {
    title: "Account type",
    caption: "Personal",
  },
  {
    title: "User ID",
    caption: "username",
  },
  {
    title: "Email adress",
    caption: "example@domain.com",
  },
  {
    title: "Password",
    caption: "**********",
  },
  {
    title: "Mobile phone number:",
    caption: "+1 234-5678-900",
  },
 
];

const Account = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authSpinner, setAuthSpinner] = useState(false);
  const [accountDetails, setAccountDetails] = useState(userData);

  const [userDetails, setUserDetails] = useState(null);
  const [email, setemail] = useState(null);
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [phone, setphone] = useState(null);
  const [username, setusername] = useState(null);
  const [acctype, setacctype] = useState(null);
  const [address, setaddress] = useState([]);

  const accountSchema = yup.object({
    user_name: yup
      .string("Enter your Name here")
      .required("User ID is required"),
    account_type: yup
      .string("Enter your account type here")
      .required("Account type is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Please make your password unique.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    phone_no: yup
      .string("Enter your MObile/phone number here")
      .required("Mobile number is required"),
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const toast = (msg, color) => {
    Toastify({
      text: msg,
      className: "info",
      style: {
        background: color,
        size: 10,
      },
      close: true,
    }).showToast();
  };
  const updateusername = async () => {
    try {
      var formdata = {
        userid: userDetails.id,
        newUsername: username,
      };
      const data = await axios.put(
        `${process.env.REACT_APP_API_DOMAIN}/account/changeUsername`,
        formdata
      );
      toast(
        "Updated successfully",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    } catch (e) {
      toast(
        e.response.data.error,
        "linear-gradient(to right, #00b09b, #ff0000)"
      );
    }
  };

  const updateemail = async () => {
    try {
      var formdata = {
        userid: userDetails.id,
        newEmail: email,
      };
      const data = await axios.put(
        `${process.env.REACT_APP_API_DOMAIN}/account/changeEmail`,
        formdata
      );
      toast(
        "Updated successfully",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    } catch (e) {
      toast(
        e.response.data.error,
        "linear-gradient(to right, #00b09b, #ff0000)"
      );
    }
  };

  const updatephone = async () => {
    try {
      var formdata = {
        userid: userDetails.id,
        newPhone: username,
      };
      const data = await axios.put(
        `${process.env.REACT_APP_API_DOMAIN}/account/changePhone`,
        formdata
      );
      toast(
        "Updated successfully",
        "linear-gradient(to right, #00b09b, #96c93d)"
      );
    } catch (e) {
      toast(
        e.response.data.error,
        "linear-gradient(to right, #00b09b, #ff0000)"
      );
    }
  };

  // const updatepassword = async () => {
  //     try{
  //         var formdata = {
  //             "userid":userDetails.id,
  //             "newUsername":username
  //         };
  //         const data = await axios.put(
  //             `${process.env.REACT_APP_API_DOMAIN}/account/changeUsername`,
  //             formdata
  //         );
  //         toast('Updated successfully', "linear-gradient(to right, #00b09b, #96c93d)")
  //     }catch(e){
  //         toast(e.response.data.error, "linear-gradient(to right, #00b09b, #ff0000)")
  //     }
  // }

  const checkuser = () => {
    var u = getLocalstore("_userLogin");
    if (u && u.email) {
      setUserDetails(u);
      setacctype(u.accountType);
      setemail(u.email);
      setfirstName(u.firstName);
      setlastName(u.lastName);
      setphone(u.phone);
      setusername(u.username);
      getaddress();
    }
  };
  const getaddress = async () => {
    try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_DOMAIN}/address/list`
      );
      if (data.data) {
        setaddress(data.data.list);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkuser();
  }, []);
  const breadcrumbs = [
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      //   onClick={handleClick}
    >
      My NichoShop
    </Link>,
    <Typography key="3" color="text.primary">
      Account
    </Typography>,
  ];
  return (
    <div className="home-page">
      <Menu />
      {userDetails ? (
        <div className="cs_section ne_css account-pg">
          <div className="container_no">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
            <h3 className="all_heading">Account</h3>
            <div className="inner_content no_padd">
              <div className="inner_content-two">
                {accountDetails.map((item,id)=>{
                  return (<AccountEdit key={id + "id"} title={item.title} caption={item.caption}/>)
                })}
                <div className="close-my-account-wrpr">
                  <Link to="/account/close-account" className="ine_close">
                    Close my account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <AccountFooter />
    </div>
  );
};

export default Account;
