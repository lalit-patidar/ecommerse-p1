// React
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 3rd party components
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import * as yup from "yup";
import { AddMobile, clearErrors } from "../../../actions/mobileActions";
// Compoenents
import Footer from "../../../components/auth/Footer";
import Header from "../../../components/auth/Header";

// Styles
import MuiPhoneNumber from "material-ui-phone-number";
import { getLocalstore, setLocalstore } from "../../../helper/localstore/localstore";
import "./../auth.css";

const AddMobileNumber = () => {


    // const [cookies, setCookie] = useCookies("RememberMe_Nichoshop");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = getLocalstore("_userLogin")

    if(data?.phoneConfirmed === "true"){
        navigate("/")
    }

    const { error, message,add_mob } = useSelector(state=>state.mobile)
    const [authSpinner, setAuthSpinner] = useState(false);
    const [getphone, setphone] = useState("");
    const [getphones, setphones] = useState(false);

    const AddNumberSchema = yup.object({
        phoneNumber: yup
            .string("Enter your Phone Number")
            .required("Phone Number Required"),
    });

    const SUCSchema = yup.object({
        suc: yup
            .string("Enter your SUC")
            .required(
                "The code you entered is different from the one we texted."
        ),
    });

    useEffect(() => {
        if (error) {
            setphones(false)
            Toastify(
                {
                text: error,
                className: "info",
                style: {
                    background:
                        "linear-gradient(to right, #00b09b, #96c93d)",
                    size: 10,
                },
                close: true,
            }
            ).showToast();
            dispatch(clearErrors());
        } else {
            if (add_mob) {
                if(getphones){
                    getphone.type = "add_phone";
                    setLocalstore("verifyphone",getphone);
                    navigate("/verify-its-you-phone");
                    setphones(false)
                }
            }
        }
    }, [dispatch, navigate,data, message, error]);

    return (
        <main>
            <div className="signUpContainer authContainer add-number">
                {/* Header  */}
                <Header>
                    
                    <Link to="/user/signin" className="redirectLink ms-1">
                        
                    </Link>
                </Header>
                {/* Header End  */}

                {/* Form Section  */}
                <section className="authFormSection">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle">
                                <h2>Add mobile number</h2>
                            </div>
                            <Formik
                                initialValues={{
                                    phoneNumber: "",
                                    countryCode: "+1",
                                }}
                                validationSchema={AddNumberSchema}
                                onSubmit={async(values, { setSubmitting }) => {
                                    setSubmitting(true);
                                    const countryCodes = values.countryCode.replace(/[^\w\s*]/gi, '')
                                    const phone = {phoneNumber:('+'+countryCodes+values.phoneNumber)}
                                    setphone(countryCodes+values.phoneNumber)
                                    dispatch(AddMobile(phone));
                                    setphones(true)
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        {authSpinner ? (
                                            <div className="formSpinner">
                                                <div className="loading"></div>
                                            </div>
                                        ) : null}
                                        <div className="textField">
                                            <p className="ui-add-mob-info">
                                                Add a mobile phone number for a
                                                higher level of protection to
                                                your NichoShop account. Make
                                                sure your mobile number is up to
                                                date because it is an important
                                                part of your account security.
                                            </p>
                                            <FormControl
                                                variant="outlined"
                                                size="small"
                                                className={
                                                    props.touched.phoneNumber &&
                                                    props.errors.phoneNumber
                                                        ? "error w-100 countryPhoneCode"
                                                        : "w-100 countryPhoneCode"
                                                }
                                            >
                                                <InputLabel htmlFor="phoneNumber">
                                                    Legal phone number
                                                </InputLabel>
                                                <OutlinedInput
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    type="text"
                                                    value={
                                                        props.values.phoneNumber
                                                    }
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="start">
                                                            <div className="countryCode">
                                                                <MuiPhoneNumber
                                                                    disabled
                                                                    className="countryCodeInput"
                                                                    defaultCountry={
                                                                        "us"
                                                                    }
                                                                    countryCodeEditable={
                                                                        false
                                                                    }
                                                                    onChange={(
                                                                        value
                                                                    ) =>
                                                                        props.setFieldValue(
                                                                            "countryCode",
                                                                            value
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </InputAdornment>
                                                    }
                                                    label="phoneNumber"
                                                />
                                            </FormControl>
                                            <ErrorMessage name="phoneNumber">
                                                {(msg) => (
                                                    <p className="formError">
                                                        {msg}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <button
                                            type="submit"
                                            className="themeBtn w-100"
                                        >
                                            Add mobile number
                                        </button>
                                    </form>
                                )}
                            </Formik>
                            <p className="not-now">
                                <Link to="/">Not Now</Link>
                            </p>
                        </div>
                    </div>
                </section>
                {/* Form Section End */}

                {/* message Component */}
                {/* <SuccessMessage /> */}
                {/* message Component End */}

                {/* Footer  */}
                <Footer />
                {/* Footer End  */}
            </div>
        </main>
    );
};

export default AddMobileNumber;
