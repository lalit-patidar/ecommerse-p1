import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearErrors, register } from "../../../actions/userActions";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { setLocalstore } from "../../../helper/localstore/localstore";
import FbImg from "./../../../assets/form-social/fb.png";
import GoogleImg from "./../../../assets/form-social/google.png";
import ToastError from "./../../../assets/form-social/toast_error.png";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import "./../authentication.scss";

import AppleSignin from 'react-apple-signin-auth';
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";



const Register = () => {
    // api
    const recaptchaRef1 = useRef(null)
    const recaptchaRef2 = useRef(null)
    const { error, signup } = useSelector(state=>state.user);

    const pwdInputRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isPwdShow, setPwdShow] = useState(false);


    const isPwdShowedHandler = () => {
        if (pwdInputRef.current.querySelector("input").type == "password") {
            pwdInputRef.current.querySelector("input").type = "text";
            setPwdShow(true);
        } else {
            pwdInputRef.current.querySelector("input").type = "password";
            setPwdShow(false);
        }
    };

    // submit form
    const [getFullName, setFullName] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");


    const [getFormSubmit, setFormSubmit] = useState(false);
    const [getCaptcha, setCaptcha] = useState("");
    const [getsignup, setsignup] = useState(false)
    // 2 type form  tab
    const [isFormSelected, setFormSelected] = useState(1);
    const [passwordHealth, setPasswordHealth] = useState({color: "", message: ""});

    const strongPasswordRegx = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    const mediumPasswordRegx = new RegExp(
        "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
    );

    const peronalHendler = () => {
        setFormSelected(1);
        setPwdShow(false);
        setPasswordHealth({color: "", message: ""})
        setFormSubmit(false);
        setFullName("");
        setEmail("");
        setPassword("");
    };

    const businessHendler = () => {
        setFormSelected(0);
        setPwdShow(false);
        setFormSubmit(false);
        setPasswordHealth({color: "", message: ""})
        setFullName("");
        setEmail("");
        setPassword("");
    };

    // full name input handler
    const fullnameHandler = (e) => {
        setFullName(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const pwdHandler = (e) => {
        const { value: password } = e.target;
        setPassword(password);

        if (password.length !== 0) {
            if (strongPasswordRegx.test(password)) {
                setPasswordHealth({color: "#48C546", message: "strong"});
            } else if (mediumPasswordRegx.test(password)) {
                setPasswordHealth({color: "#FECE71", message: "medium"});
            } else {
                setPasswordHealth({color: "#FF6666", message: "low"});
            }
        } else {
            setPasswordHealth("");
        }
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
                y: 55, 
            },
        }).showToast();
    }

    const formHandler = async (e) => {
        e.preventDefault();
        let isFormEmpty = !getPassword && !getEmail && !getFullName;
        if (isFormEmpty) {
            setFormSubmit(true)
            showErrorMsg("Please fix the error highlited below");
        }

        if (isFormSelected === 1 && !isFormEmpty) {
            setFormSubmit(true);
            const data = {
                email: getEmail,
                recaptcha: getCaptcha,
                fullName: getFullName,
                accountType: 1,
                password: getPassword,
            };
            dispatch(register(data));
            setsignup(true);
        } else if (isFormSelected === 0 && !isFormEmpty) {
            setFormSubmit(true);

            const data = {
                email: getEmail,
                recaptcha: getCaptcha,
                fullName: getFullName,
                accountType: 2,
                password: getPassword,
            };
            dispatch(register(data));
            setsignup(true);
        }
    };

    const captchaHandler = (value) => {
        setCaptcha(value);
    };

    // Google Login
    const googleLogin = () => {
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                googleSignInCallback( authResponse )
            },
            clientid: process.env.REACT_APP_GOOGLE, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }
    
    const googleSignInCallback = (e) => {
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            });
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    const getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log('Import error - Error occured while importing data',e)
                return
            } else if (e.id) {
                console.log( "user",e.result );
                return;
            }
        });
    }


    // faceBook Login
    const facebookLogin = () => {
        window.FB.login(
            checkLoginState(), 
            { scope : 'email, public_profile' } //Add scope whatever you need about the facebook user
        );
    };
    
    function checkLoginState() {
        window.FB.getLoginStatus(
        function (response) {
            statusChangeCallback(response);
        });
    }
    
    function statusChangeCallback(response) {
        console.log("statusChangeCallback");
        if (response.status === "connected") {
            alert("Connected to facebook. Retriving user from fb");
            // Logged into your app and Facebook.
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
        console.log("Welcome!  Fetching your information.... ");
        window.FB.api("/me", function (user) {
            console.log("Successful login from facebook : " + user.name);
            alert("Successful login for: " + user.name);
        });
    };


    // Apple Login
    function Applelogin(response){
        console.log(response);
    };


    useEffect(() => {
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
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
            if (signup) {
                if(getsignup){
                    const name = getFullName.indexOf(' ') > -1 ? getFullName.split(' ')[0] : getFullName;
                    setLocalstore("userName",name);
                    setLocalstore("userEmail",getEmail);
                    navigate("/join-verify");
                    setsignup(false)
                }
            }
        }
    }, [dispatch, navigate,signup, getEmail,getFullName,recaptchaRef1,recaptchaRef2,error]);

    
    
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
                    <h4>It’s fast and free to get started</h4>
                    <ul
                    class="nav nav-pills mb-3 form-toggle-btn"
                    id="pills-tab"
                    role="tablist"
                    >
                    <li class="nav-item toggle-btn-wrapper" role="presentation">
                        <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        onClick={peronalHendler}
                        >
                        Personal
                        </button>
                    </li>
                    <li class="nav-item toggle-btn-wrapper" role="presentation">
                        <button
                        class="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                        onClick={businessHendler}
                        >
                            Business
                        </button>
                    </li>
                    </ul>
                    {isFormSelected === 1 && (
                    <>
                        <Form onSubmit={formHandler}>
                            <Form.Group className="mb-3 input-field-wrapper">
                                <TextField
                                id="outlined-basic"
                                label="Full name"
                                variant="outlined"
                                size="small"
                                onChange={fullnameHandler}
                                value={getFullName}
                                error={
                                    getFormSubmit && getFullName.length < 1 && true
                                }
                                style={{
                                    width: 352,
                                    color: "#B2B2C2",
                                    borderColor: "#E4E4EE",
                                }}
                                />
                                <span className="ui-form-lable-error">
                                {getFormSubmit &&
                                    getFullName.length < 1 &&
                                    "Enter name"}
                                </span>
                            </Form.Group>
                            <Form.Group className="mb-3 input-field-wrapper">
                                <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={emailHandler}
                                value={getEmail}
                                error={getFormSubmit && getEmail.length < 1 && true}
                                style={{ width: 352 }}
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
                                    inputProps={{
                                    minLength: 8,
                                    }}
                                    type="password"
                                    ref={pwdInputRef}
                                    onChange={pwdHandler}
                                    value={getPassword}
                                    error={
                                    getFormSubmit && getPassword.length < 1 && true
                                    }
                                    style={{ width: 352 }}
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
                            {passwordHealth.message && (
                                <div className="password-health-check-wrapper">
                                <div className="progress password-progress">
                                    <div
                                    className="progress-bar"
                                    role="progressbar"
                                    aria-valuenow="25"
                                    aria-valuemin="100"
                                    aria-valuemax="100"
                                    style={{ width: `${passwordHealth.message === 'strong' ? "100%" : passwordHealth.message === 'medium' ? "80px": "40px" }`, backgroundColor: passwordHealth.color}}
                                    ></div>
                                </div>
                                <span style={{color: passwordHealth.color}}>{passwordHealth.message}</span>
                                </div>
                            )}
                            <ReCAPTCHA
                            ref={recaptchaRef1}
                            className="mt-3 captcha"
                            sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                            onChange={captchaHandler}
                            style={{
                                display: "block !important",
                            }}/>         
                            <Button variant="primary" type="submit">
                                Create your account
                            </Button>
                        </Form>
                    </>
                    )}
                    {isFormSelected === 0 && (
                    <>
                        <Form onSubmit={formHandler}>
                        <Form.Group className="mb-3 input-field-wrapper">
                            <TextField
                            id="outlined-basic"
                            label="Legal business name"
                            variant="outlined"
                            size="small"
                            onChange={fullnameHandler}
                            value={getFullName}
                            error={
                                getFormSubmit && getFullName.length < 1 && true
                            }
                            style={{
                                width: 352,
                                color: "#B2B2C2",
                                borderColor: "#E4E4EE",
                            }}
                            />
                            <span className="ui-form-lable-error">
                            {getFormSubmit &&
                                getFullName.length < 1 &&
                                "Please enter the business or DBA name."}
                            </span>
                        </Form.Group>
                        <Form.Group className="mb-3 input-field-wrapper">
                            <TextField
                            id="outlined-basic"
                            label="Legal business email"
                            variant="outlined"
                            size="small"
                            fullWidth
                            onChange={emailHandler}
                            value={getEmail}
                            error={getFormSubmit && getEmail.length < 1 && true}
                            style={{ width: 352 }}
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
                                inputProps={{
                                minLength: 8,
                                }}
                                type="password"
                                ref={pwdInputRef}
                                onChange={pwdHandler}
                                value={getPassword}
                                error={
                                getFormSubmit && getPassword.length < 1 && true
                                }
                                style={{ width: 352 }}
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

                        {passwordHealth.message && (
                            <div className="password-health-check-wrapper">
                            <div className="progress password-progress">
                                <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="100"
                                aria-valuemax="100"
                                style={{ width: `${passwordHealth.message === 'strong' ? "100%" : passwordHealth.message === 'medium' ? "80px": "40px" }`, backgroundColor: passwordHealth.color}}
                                ></div>
                            </div>
                            <span style={{color: passwordHealth.color}}>{passwordHealth.message}</span>
                            </div>
                        )}

                        <Button variant="primary" type="submit">
                            Create your account
                        </Button>
                        </Form>
                    </>
                    )}

                    <p className="text-start">
                    By Registering, you are agree to NichoShop’s
                    <a href="#">User Agreement</a> and
                    <a href="#">Cookies & Internet Advertising.</a>
                    </p>

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
                            redirectURI: "https://bevaleo.dev/",
                            state: "",
                            usePopup: true,
                        }}
                        /** General props */
                        uiType="light"
                        /** className */
                        className="apple-auth-btn"
                        buttonExtraChildren=""
                        onSuccess={(response) => Applelogin(response)}
                        /** Spread rest props if needed */
                        // {...rest}
                        />
                    </div>
                    </div>
                </div>

                <div className="ui-form-link">
                    <p>
                    Already a member? Sign In <Link to="/signin">Login</Link>
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

export default Register;
