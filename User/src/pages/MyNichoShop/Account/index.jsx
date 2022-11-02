import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    Breadcrumbs, FormControl, OutlinedInput,
    TextField
} from "@mui/material";
import { Formik } from "formik";
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

const Account = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [authSpinner, setAuthSpinner] = useState(false);

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
        Toastify(
            {
            text: msg,
            className: "info",
            style: {
                background:
                color,
                size: 10,
            },
            close: true,
        }
        ).showToast();
    }
    const updateusername = async () => {
        try{
            var formdata = {
                "userid":userDetails.id,
                "newUsername":username
            };
            const data = await axios.put(
                `${process.env.REACT_APP_API_DOMAIN}/account/changeUsername`,
                formdata
            );
            toast('Updated successfully', "linear-gradient(to right, #00b09b, #96c93d)")
        }catch(e){
            toast(e.response.data.error, "linear-gradient(to right, #00b09b, #ff0000)")
        }
    }

    const updateemail = async () => {
        try{
            var formdata = {
                "userid":userDetails.id,
                "newEmail":email
            };
            const data = await axios.put(
                `${process.env.REACT_APP_API_DOMAIN}/account/changeEmail`,
                formdata
            );
            toast('Updated successfully', "linear-gradient(to right, #00b09b, #96c93d)")
        }catch(e){
            toast(e.response.data.error, "linear-gradient(to right, #00b09b, #ff0000)")
        }
    }

    const updatephone = async () => {
        try{
            var formdata = {
                "userid":userDetails.id,
                "newPhone":username
            };
            const data = await axios.put(
                `${process.env.REACT_APP_API_DOMAIN}/account/changePhone`,
                formdata
            );
            toast('Updated successfully', "linear-gradient(to right, #00b09b, #96c93d)")
        }catch(e){
            toast(e.response.data.error, "linear-gradient(to right, #00b09b, #ff0000)")
        }
    }

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
        var u =  getLocalstore('_userLogin');
        if(u && u.email){
            setUserDetails(u);
            setacctype(u.accountType)
            setemail(u.email);
            setfirstName(u.firstName);
            setlastName(u.lastName);
            setphone(u.phone);
            setusername(u.username);
            getaddress();
        }
    }
    const getaddress = async () => {
        try{
            const data = await axios.get(
                `${process.env.REACT_APP_API_DOMAIN}/address/list`
            );
            if(data.data){
                setaddress(data.data.list);
            }
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        checkuser();
    },[])

    return (
        <div className="home-page">
            <Menu />
            {userDetails ? (

            <div className="cs_section ne_css account-pg">
                <div className="container_no">
                    <Breadcrumbs />
                    <h3 className="all_heading">Account</h3>
                    <div className="inner_content no_padd">
                        <div className="inner_content-two">
                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    emailorname: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="account">
                                                        Account Type:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value={acctype==1?"Personal":"Bussiness"}
                                                        variant="outlined"
                                                        size="small"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit1"
                                                    className="themeBtn w-100"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}

                            <hr />
                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    user_name: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="user_name">
                                                        User ID:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value={username}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={event=>{
                                                            setusername(event.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                    onClick={updateusername}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />

                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    email: "",
                                }}
                            >
                                {(props) => (
                                    <form
                                        onSubmit={props.handleSubmit}
                                        readOnly
                                    >
                                        <div className="row out_both">
                                            {authSpinner ? (
                                                <div className="formSpinner">
                                                    <div className="loading"></div>
                                                </div>
                                            ) : null}
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="email">
                                                        Email address:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value={email}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={event=>{
                                                            setemail(event.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                    onClick={updateemail}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />

                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    password: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <FormControl
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        <label for="Password">
                                                            Password
                                                        </label>
                                                        <OutlinedInput
                                                            value="**********"
                                                            label="Password"
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />

                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    phone_no: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="">
                                                        Mobile phone number:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value={phone}
                                                        variant="outlined"
                                                        size="small"
                                                        onChange={event=>{
                                                            setphone(event.target.value);
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                    onClick={updatephone}
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />
                            <div className="row out_both second-last">
                                <div className="col-md-9 form_left full width">
                                    <p className="top_text">
                                        Registration address
                                    </p>
                                    <h4 className="ine_haed">Name {firstName+' '+lastName}</h4>
                                    <div className="info_div">
                                        <p>1234 EL CAMINO REAL</p>
                                        <p>STE - 100386</p>
                                        <p>SUNNYVALE CA 98765-4321</p>
                                        <p>United States</p>
                                        <p>Phone: + 1 234-5678-900</p>
                                    </div>
                                </div>
                                <div className="col-md-3 form_right full_width">
                                    <a href="/account/add-your-address">
                                    <button
                                        type="button"
                                        className="btn btn-primary Edit"
                                    >
                                        Edit
                                    </button>
                                    </a>
                                </div>
                            </div>
                            <hr />
                            <div className="row out_both last-row">
                                <div className="col-md-9 form_left renove_mob"></div>
                                <div className="col-md-3 form_right full width">
                                    <Link
                                        to="/account/close-account"
                                        className="ine_close"
                                    >
                                        Close my account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BusinessInformation />
                </div>
            </div>
            ): null}
            <AccountFooter />
        </div>
    );
};

export default Account;
