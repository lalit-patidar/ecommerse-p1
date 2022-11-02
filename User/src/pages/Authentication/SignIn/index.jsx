import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { usePostLoginMutation } from "../../../api/services/authApi";
import FormFooter from "../../../components/FormFooter/FormFooter";
import {
    removeLocalstore, setLocalstore
} from "../../../helper/localstore/localstore";
import FbImg from "./../../../assets/form-social/fb.png";
import GoogleImg from "./../../../assets/form-social/google.png";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import AppleSignin from "react-apple-signin-auth";
import { useCookies } from "react-cookie";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { clearErrors, login } from "../../../actions/userActions";
import ToastError from "./../../../assets/form-social/toast_error.png";

const Querystring = require("querystring");

const SignIn = () => {
    const [cookies, setCookie] = useCookies("RememberMe_Nichoshop");
    const recaptchaRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { error, user, signin } = useSelector(
        (state) => state.user
    );

    const [loginApi, { isLoading }] = usePostLoginMutation();
    const pwdInputRef = useRef();
    const [isPwdShow, setPwdShow] = useState(false);

    const isPwdShowedHandler = () => {
        if (pwdInputRef.current.querySelector("input").type === "password") {
        pwdInputRef.current.querySelector("input").type = "text";
        setPwdShow(true);
        } else {
        pwdInputRef.current.querySelector("input").type = "password";
        setPwdShow(false);
        }
    };

    // submit form
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");
    const [getCaptcha, setCaptcha] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    // full name input handler

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const pwdHandler = (e) => {
        setPassword(e.target.value);
    };

    const showErrorMsg = (msg) => {
        Toastify({
            text: msg,
            className: "toastify-center",
            duration: 3000,
            avatar: ToastError,
            style: {
                background: "#FFF0F0",
                size: 10,
                color: "#FF6666",
            },
            offset: {
                y: 60, // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
        }).showToast();
    }

    // form data submit
    const formHandler = async (e) => {
        e.preventDefault();
        setFormSubmit(true);
        let isFormEmpty = !getPassword && !getEmail;
        if (isFormEmpty) {
            showErrorMsg("Please fix the error highlited below");
        }

        if (getEmail.length !== 0 && getPassword !== 0 && getCaptcha.length !== 0) {
            const formData =  {
                username: getEmail,
                password: getPassword,
                recaptcha: getCaptcha,
            };
            dispatch(login(formData));
        }
    };

    const captchaHandler = (value) => {
        setCaptcha(value);
    };

    // Google Login
    const googleLogin = () => {
        window.gapi.auth.signIn({
            callback: function (authResponse) {
                googleSignInCallback(authResponse);
            },
            clientid: process.env.REACT_APP_GOOGLE, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email",
        });
    };

    const googleSignInCallback = (e) => {
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function () {
                if (e["access_token"]) {
                getUserGoogleProfile(e["access_token"]);
                } else if (e["error"]) {
                console.log("Import error", e['error']);
                }
            });
        } else {
            console.log("Oops... Error occured while importing data");
        }
    };

    const getUserGoogleProfile = (accesstoken) => {
        var e = window.gapi.client.plus.people.get({
            userId: "me",
        });
        e.execute(function (e) {
        if (e.error) {
            console.log(e.message);
            return;
        } else if (e.id) {
            console.log("user", e.result);
            return;
        }
        });
    };

    // faceBook Login
    const facebookLogin = () => {
        window.FB.login(
            checkLoginState(),
            { scope: "email, public_profile" } //Add scope whatever you need about the facebook user
        );
    };

    function checkLoginState() {
        window.FB.getLoginStatus(function (response) {
            statusChangeCallback(response);
        });
    }

    function statusChangeCallback(response) {
        if (response.status === "connected") {
            alert("Connected to facebook. Retriving user from fb");
            fetchDataFacebook();
        } else if (response.status === "not_authorized") {
            console.log("Import error", "Authorize app to import data", "error");
        } else {
            console.log(
                "Import error",
                "Error occured while importing data",
                "error"
            );
        }
    }

    const fetchDataFacebook = () => {
        window.FB.api("/me", function (user) {
            alert("Successful login for: " + user.name);
        });
    };

    // Apple Login
    function Applelogin(response) {
        console.log(response);
    }

    useEffect(() => {
        (function () {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        })();

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");

        window.fbAsyncInit = function () {
            window.FB.init({
                appId: process.env.REACT_APP_FACEBOOK,
                cookie: true, // enable cookies to allow the server to access the session
                xfbml: true, // parse social plugins on this page
                version: "v2.8", // use version 2.1
                HTTPS: true,
            });
        };

        if (error) {
            showErrorMsg(error);
            dispatch(clearErrors());
        } else {
            if (signin) {
                setCookie("RememberMe_Nichoshop", user, {
                    path: "/",
                });
                setLocalstore("_userLogin", user);
                navigate("/add-mobile-number");
                removeLocalstore("_grecaptcha");
                removeLocalstore("signup_data");
                removeLocalstore("choose_method");
            }
        }
    }, [dispatch, navigate, signin, recaptchaRef, error]);

    return (
        <>
        <div className="ui-form-box">
            <Container>
            <Row>
                <Col>
                <div className="ui-form-logo">
                    <Logo />
                </div>
                <div className="ui-form-content">
                    <h4 className="login-title">Welcome!</h4>
                    <p className="login-message-caption">
                        Please sign in to your account
                    </p>

                    <Form onSubmit={formHandler}>
                        <Form.Group className="mb-3 input-field-wrapper">
                            <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            size="small"
                            onChange={emailHandler}
                            value={getEmail}
                            error={getFormSubmit && getEmail.length < 1 && true}
                            style={{
                                width: 352,
                                color: "#B2B2C2",
                                borderColor: "#E4E4EE",
                            }}
                            />
                            <span className="ui-form-lable-error">
                            {getFormSubmit &&
                                getEmail.length < 1 &&
                                "Please enter your email address"}
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-3 input-field-wrapper">
                            <div className="ui-form-pwd">
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                size="small"
                                fullWidth
                                type="password"
                                ref={pwdInputRef}
                                onChange={pwdHandler}
                                value={getPassword}
                                error={getFormSubmit && getPassword.length < 1 && true}
                                style={{
                                    width: 352,
                                    color: "#B2B2C2",
                                    borderColor: "#E4E4EE",
                                }}
                            />
                            <button onClick={isPwdShowedHandler} type="button">
                                {isPwdShow ? <BsEye /> : <BsEyeSlash />}
                            </button>
                            </div>

                            <span className="ui-form-lable-error">
                            {getFormSubmit &&
                                getPassword.length < 1 &&
                                "Enter Password"}
                            </span>
                        </Form.Group>

                        <div className="ui-form-signin-info">
                            <div className="ui-stay-signin">
                            <Form.Check
                                type="checkbox"
                                label="Stay signed in"
                                id="stay-signin"
                            />
                            </div>
                            <div className="ui-stay-signin-link">
                            <Link to="/forget-password">Forgot password?</Link>
                            <Link to="/text-a-temporary-password">
                                Temporary password
                            </Link>
                            </div>
                        </div>

                        <div className="recaptch-wrapper">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                className="mt-3 captcha captcha-blog"
                                sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                                onChange={captchaHandler}
                                style={{
                                    display: "block !important",
                                    width: '352px'
                                }}
                            />
                        </div>
                        {getFormSubmit && getCaptcha.length < 1 && (
                            <span className="ui-form-lable-error text-center d-blcok">
                            Captcha is required! Refresh the page
                            </span>
                        )}
                        <Button variant="primary" type="submit">
                            {isLoading && (
                            <div
                                className="spinner-border spinner-border-sm me-3"
                                role="status"
                            >
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            )}
                            Sign in
                        </Button>
                    </Form>

                    <div className="ui-form-social">
                        <div className="ui-form-head">
                            <span></span>
                            <p>or</p>
                            <span></span>
                        </div>
                        <div className="ui-form-social-btn">
                            <button className="social-toggle-btn">
                                <img
                                    src={GoogleImg}
                                    title="google login"
                                    alt="google"
                                    onClick={googleLogin}
                                />
                            </button>

                            <button>
                                <img
                                    src={FbImg}
                                    title="facebook login"
                                    alt="facebook"
                                    onClick={facebookLogin}
                                />
                            </button>

                            <AppleSignin
                                authOptions={{
                                    clientId: "dev.bevaleo",
                                    scope: "email name",
                                    //redirectURI: "http://localhost:3000/",
                                    redirectURI: "https://bevaleo.dev/",
                                    state: "",
                                    // nonce: "nonce",
                                    usePopup: true,
                                }}
                                /** General props */
                                uiType="light"
                                /** className */
                                className="apple-auth-btn"
                                buttonExtraChildren=""
                                //onSuccess response object will contain the user object on the first time attempt only
                                onSuccess={(response) => Applelogin(response)}
                                /** Spread rest props if needed */
                                // {...rest}
                                />
                        </div>
                    </div>
                </div>

                <div className="ui-form-link">
                    <p>
                        Don’t have an account? <Link to="/registration">Sign Up</Link>
                    </p>
                </div>
                </Col>
            </Row>
            </Container>
        </div>
        <FormFooter />
        </>
    );
};

export default SignIn;
