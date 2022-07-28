// React
import React, { useState,useEffect,useRef } from "react";
import { Link } from "react-router-dom";

// 3rd party components
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import { BsExclamationOctagon } from "react-icons/bs";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, TempPassword } from "../../../actions/userActions";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
// Compoenents
// import Header from "../../components/auth/Header";
// import Footer from "../../components/auth/Footer";
import { setLocalstore } from "../../../helper/localstore/localstore";
import ReCAPTCHA from "react-google-recaptcha";

// Styles
import "./textatemporarypassword.css";
import Footer from "../../../components/auth/Footer";
import Header from "../../../components/header/Header";

const TextATemporaryPassword = () => {

    const recaptchaRef = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [getEmail, setEmail] = useState("");
    const [getCaptcha, setCaptcha] = useState("");
    const [getFormSubmit, setFormSubmit] = useState(false);

    const captchaHandler = (value) => {
        setCaptcha(value);
    };


    const { error,temp_pwd,message } = useSelector(state=>state.forgotPassword)
    console.log(error);
    console.log(temp_pwd);
    console.log(message);

    const [authSpinner, setAuthSpinner] = useState(false);
    const [otpss, setotpss] = useState(false);

    console.log(getEmail);
    const UsernameSchema = yup.object({
        username: yup
            .string("Enter your Email or Username")
            .required("This email or username doesn't exit."),
    });

    useEffect(() => {
        if (error) {
            //alert.show(error);
            setotpss(false)
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
          //alert.error(error);
          dispatch(clearErrors());
        } else {
            if (temp_pwd) { 
                if(otpss){
                    var user = message;
                    setLocalstore("choose_method",user);
                    navigate("/choose-method",{email:getEmail});
                    setotpss(false)
                }
            }
        }
        
        
      }, [dispatch, navigate,temp_pwd, error,message]);


    return (
        <main>
            <div className="signInContainer authContainer temp-password">
                {/* Header  */}
                <Header>
                    Already a member?
                    <Link to="/user/signin" className="redirectLink ms-1">
                        Sign In
                    </Link>
                </Header>
                {/* Header End  */}

                {/* Form Section  */}
                <section className="authFormSection">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle">
                                <h2>Text a temporary password</h2>
                            </div>

                            <Formik
                                initialValues={{
                                    username: "",
                                }}
                                validationSchema={UsernameSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    //alert(JSON.stringify(values, null, 2));
                                    setSubmitting(true);
                                    setFormSubmit(true);
                                    const email = values.username
                                    //console.log(email);
                                    setEmail(email)
                                    dispatch(TempPassword(email,getCaptcha));
                                    setotpss(true)
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        {authSpinner ? (
                                            <div className="formSpinner">
                                                <div className="loading"></div>
                                            </div>
                                        ) : null}
                                        <p className="mt-0">
                                            Enter the username or email address
                                            associated with your
                                            NichoShop account.
                                        </p>

                                        <div className="textField">
                                            <TextField
                                                fullWidth
                                                id="username"
                                                name="username"
                                                label="Email or username"
                                                type="text"
                                                variant="outlined"
                                                size="small"
                                                className={
                                                    props.touched.username &&
                                                    props.errors.username
                                                        ? "error"
                                                        : ""
                                                }
                                                value={props.values.username}
                                                onChange={props.handleChange}
                                            />
                                            <ErrorMessage name="username">
                                                {(msg) => (
                                                    <p className="formError">
                                                        {msg}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <ReCAPTCHA
                                        ref={recaptchaRef}
                                        className="mt-3 captcha"
                                        sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                                        onChange={captchaHandler}
                                        style={{
                                            display: "flex",
                                            "justify-content": "center",
                                            "margin-bottom": "1rem"
                                        }}
                                        />
                                        {getFormSubmit && getCaptcha.length < 1 && (
                                            <span className="ui-form-lable-error text-center d-blcok">
                                                Captcha is required! Refresh the page
                                            </span>
                                        )}
                                        <div className="temp-password-btn">
                                            <button
                                                type="submit"
                                                className="themeBtn w-100"
                                            >
                                                Continue
                                            </button>

                                            <Link
                                                to="/signin"
                                                className="noBgThemeBtn mb-3 text-bold"
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </form>
                                )}
                            </Formik>
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

export default TextATemporaryPassword;
