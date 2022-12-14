// React
import React, { useState ,useEffect} from "react";
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
import { IoIosMail } from "react-icons/io";
import { BsChatLeftTextFill } from "react-icons/bs";

import * as yup from "yup";

// Compoenents
import Header from "../../../components/auth/Header";
import Footer from "../../../components/auth/Footer";

//Images
import Email from "../../../assets/authentication/email.svg";
import Text from "../../../assets/authentication/get-text.svg";
// Styles
import "./../auth.css";
import { getStore } from "./../../../helper/storeHelper";
import { clearErrors, EmailSuc ,TextSuc} from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


const ChooseMethod = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const datas = getStore("choose_method");
    // datas.phone = "919630196313";
    // console.log(datas);

    const { error,email_pwd } = useSelector(state=>state.forgotPassword)
    const { errors,txt_pwd,message } = useSelector(state=>state.mobile)
    
    console.log(errors);
    console.log(error);
    console.log(txt_pwd);
    console.log(email_pwd);
    console.log(message);


    const [authSpinner, setAuthSpinner] = useState(false);
    const [emailsuc,setemailsuc] = useState(false);
    const [textsuc,settextsuc] = useState(false);

    console.log("email",emailsuc);
    console.log("text",textsuc);


    const UsernameSchema = yup.object({
        username: yup
            .string("Enter your Email or Username")
            .required("This email or username doesn't exit."),
    });

    const Email_suc = async(e) => {   
        e.preventDefault();
        //alert(datas.email);
        const email = datas.email
        dispatch(EmailSuc(email))
        setemailsuc(true);
        settextsuc(false);
    };

    const Text_suc = async(e) => {
        e.preventDefault();
        if(datas?.phone){
            console.log("phone");
            const phone = datas.phone
            dispatch(TextSuc(phone))
            settextsuc(true);
            setemailsuc(false);
            //alert(datas.phone);
        } else {
            //alert("Phone no is not verified")
            settextsuc(false);
            setemailsuc(false);
            Toastify(
                {
                text: "Phone no is not verified",
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
        }
        
    };

    useEffect(() => {
        if (errors) {
            //alert.show(error);
            settextsuc(false);
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
        }

        if (error) {
            //alert.show(error);
            setemailsuc(false);
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
        }

        if (email_pwd) {
            if(emailsuc){
                console.log("email");
                navigate("/verify-its-you-email");
                setemailsuc(false);
            }
        }
        if (txt_pwd) {
            if(textsuc){
                console.log("phone");
                navigate("/verify-its-you-phone");
                settextsuc(false);
                //setLocalstore("_userLogin",user);
            }
        }
      }, [dispatch, navigate,txt_pwd,email_pwd, error]);

    
    return (
        <main>
            <div className="signInContainer authContainer">
                <Header>
                    Already a member?
                    <Link to="/signin" className="redirectLink ms-1">
                        Sign In
                    </Link>
                </Header>
                {/* Form Section  */}
                <section className="authFormSection choose-method">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle">
                                <h2>
                                    How do you want to get your single-use code
                                </h2>
                            </div>

                            <Formik
                                initialValues={{
                                    username: "",
                                }}
                                validationSchema={UsernameSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    // alert(JSON.stringify(values, null, 2));
                                    setSubmitting(true);
                                    console.log("values",values);
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        {authSpinner ? (
                                            <div className="formSpinner">
                                                <div className="loading"></div>
                                            </div>
                                        ) : null}
                                        <Link
                                            className="choose-option"
                                            to="" onClick={Email_suc}
                                        >
                                            <strong>
                                                <img
                                                    className="email"
                                                    src={Email}
                                                    alt="Email"
                                                />
                                                Get an email
                                            </strong>
                                            <p className="formError">
                                                We???ll send a code to your email: {""}
                                                {datas?.email}
                                            </p>
                                        </Link>

                                        <Link
                                            className="choose-option"
                                            to="" onClick={Text_suc}
                                        >
                                            <strong>
                                                <img
                                                    className="get-text"
                                                    src={Text}
                                                    alt="Text"
                                                />
                                                Get a text
                                            </strong>
                                            <p className="formError">
                                                We???ll text a code to your phone{" "}
                                                <strong>{datas?.phone}</strong>
                                            </p>
                                        </Link>

                                    </form>
                                )}
                            </Formik>

                            <div className="choose-option-txt">
                                <h2>Having trouble resetting your password?</h2>
                                <p>
                                    If you no longer use the email address or
                                    the mobile phone number associated with your
                                    NichoShop account, you can contact{" "}
                                    <Link to="/">Customer Support</Link> for
                                    help restoring access to your account.
                                </p>
                                <span>
                                    *By selecting to Get a text, mobile phone
                                    charges my apply.
                                </span>
                            </div>
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

export default ChooseMethod;
