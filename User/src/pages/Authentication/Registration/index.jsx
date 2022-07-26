import "./../authentication.scss";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import GoogleImg from "./../../../assets/form-social/google.png";
import AppleImg from "./../../../assets/form-social/apple.png";
import FbImg from "./../../../assets/form-social/fb.png";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useRef, useState ,useEffect} from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../actions/userActions";
import { setLocalstore } from "../../../helper/localstore/localstore";

import "react-phone-number-input/style.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useNavigate } from "react-router-dom";
import { usePostRegisterMutation } from "../../../api/services/authApi";
// import FacebookLogin from "react-facebook-login";
import AppleSignin from 'react-apple-signin-auth';

const Registration = () => {
    // api
    const recaptchaRef1 = useRef(null)
    const recaptchaRef2 = useRef(null)

    const [regApi, { isLoading }] = usePostRegisterMutation();

    const { error, signup,user } = useSelector(state=>state.user)
    console.log(error);
    console.log(user);
    const pwdInputRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // is password show & hidden
    const [isPwdShow, setPwdShow] = useState(false);

    // pasword show & hidden
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
    const [getMobileNumber, SetMobileNumber] = useState("");
    const [getPhone, setPhone] = useState();

    // pasword validation
    const [getPwdLength, setPwdLength] = useState(false);
    const [getNumOrSimble, setNumOrSimble] = useState(false);
    const [getPwdInSensitive, setPwdInSensitive] = useState(false);
    const [getTotalLength, setTotalLength] = useState(0);

    const [getFormSubmit, setFormSubmit] = useState(false);
    const [getCaptcha, setCaptcha] = useState("");

    // 2 type form  tab
    const [isFormSelected, setFormSelected] = useState(1);
    const peronalHendler = () => {
        setFormSelected(1);
        setPwdShow(false);
        // tab move
        setFormSubmit(false);
        // form input value empty
        setFullName("");
        setEmail("");
        setPassword("");
    };
    const businessHendler = () => {
        setFormSelected(0);
        setPwdShow(false);
        setFormSubmit(false);
        // form input value empty
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
        setPassword(e.target.value);
        e.target.value.length !== 0 ? setPwdLength(true) : setPwdLength(false);

        setTotalLength(e.target.value.length);

        if (e.target.value.length !== 0) {
            e.target.value.match(/[^a-zA-z]/) !== null
                ? setNumOrSimble(true)
                : setNumOrSimble(false);
        } else {
            setNumOrSimble(false);
        }
        if (e.target.value.length !== 0) {
            e.target.value.match(/[a-zA-Z]/) !== null
                ? setPwdInSensitive(true)
                : setPwdInSensitive(false);
        } else {
            setPwdInSensitive(false);
        }
    };

    // form data submit
    const formHandler = async (e) => {
        e.preventDefault();

        if (isFormSelected === 1) {
            setFormSubmit(true);
            
                // const res = await regApi({
                //     email: getEmail,
                //     grecaptcha: getCaptcha,
                //     name: getFullName,
                //     accountType: 1,
                //     password: getPassword,
                // });

                const data = {
                        email: getEmail,
                        grecaptcha: getCaptcha,
                        name: getFullName,
                        accountType: 1,
                        password: getPassword,
                    };
                //console.log(data);
               
                dispatch(register(data))
           

        } else if (isFormSelected === 0) {
            setFormSubmit(true);

            const data = {
                email: getEmail,
                grecaptcha: getCaptcha,
                name: getFullName,
                accountType: 2,
                password: getPassword,
            };
            //console.log(data);
        dispatch(register(data))
        }
    };

    // social auth
    // const responseFacebook = (response) => {
    //     console.log(response);
    // };
    // const componentClicked = (data) => {
    //     console.log(data);
    // };

    const captchaHandler = (value) => {
        //console.log(value);
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
        console.log("callback", e )
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
                console.log(e.message);
                console.log('Import error - Error occured while importing data')
                return
            
            } else if (e.id) {
                //Profile data
                //alert("Successfull login from google : "+ e.displayName )
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
    
        // window.FB.login(
        //   function (resp) {
        //     statusChangeCallback(resp);
        //   },
        //   {
        //     scope:
        //       "email,user_work_history,user_education_history,user_location,public_profile",
        //   }
        // );
      };
    
    function checkLoginState() {
        //alert("Checking Login Status");
        console.log("Checking login status...........");
    
        window.FB.getLoginStatus(
          function (response) {
            //alert("FB Callback");
            console.log("----------->FB Callback");
            console.log(response);
            statusChangeCallback(response);
          }
        );
      }
    
    function statusChangeCallback(response) {
        console.log("statusChangeCallback");
        console.log(response);
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
          console.log(user);
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
            //alert.show(error);
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
    
        if (signup) {
            //console.log(getEmail);
            //console.log(getFullName);
          setLocalstore("signup_data",user);
          navigate("/join-verify");
        }
      }, [dispatch, navigate,signup, getEmail,getFullName,recaptchaRef1,recaptchaRef2,error, ]);

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
                                <div className="ui-form-option">
                                    {["radio"].map((type) => (
                                        <div
                                            key={`inline-${type}`}
                                            className="mb-3 d-flex align-items-center"
                                        >
                                            <Form.Check
                                                inline
                                                label="Personal account"
                                                name="group1"
                                                checked={
                                                    isFormSelected === 1
                                                        ? true
                                                        : false
                                                }
                                                type={type}
                                                id={`inline-${type}-1`}
                                                onChange={peronalHendler}
                                            />
                                            <Form.Check
                                                inline
                                                label="Business account"
                                                name="group1"
                                                type={type}
                                                checked={
                                                    isFormSelected === 0
                                                        ? true
                                                        : false
                                                }
                                                id={`inline-${type}-2`}
                                                onChange={businessHendler}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {isFormSelected === 1 && (
                                    <>
                                        <Form onSubmit={formHandler}>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Full name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    onChange={fullnameHandler}
                                                    value={getFullName}
                                                    error={
                                                        getFormSubmit &&
                                                        getFullName.length <
                                                            1 &&
                                                        true
                                                    }
                                                />
                                                <span className="ui-form-lable-error">
                                                    {getFormSubmit &&
                                                        getFullName.length <
                                                            1 &&
                                                        "Enter name"}
                                                </span>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    onChange={emailHandler}
                                                    value={getEmail}
                                                    error={
                                                        getFormSubmit &&
                                                        getEmail.length < 1 &&
                                                        true
                                                    }
                                                />
                                                <span className="ui-form-lable-error">
                                                    {getFormSubmit &&
                                                        getEmail.length < 1 &&
                                                        "Please enter your email address"}
                                                </span>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <div className="ui-form-pwd">
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Password"
                                                        variant="outlined"
                                                        size="small"
                                                        fullWidth
                                                        inputProps={{
                                                            minLength:8
                                                        }}
                                                        type="password"
                                                        ref={pwdInputRef}
                                                        onChange={pwdHandler}
                                                        value={getPassword}
                                                        error={
                                                            getFormSubmit &&
                                                            getPassword.length <
                                                                1 &&
                                                            true
                                                        }
                                                    />
                                                    <button
                                                        onClick={
                                                            isPwdShowedHandler
                                                        }
                                                        type="button"
                                                    >
                                                        {isPwdShow ? (
                                                            <BsEye />
                                                        ) : (
                                                            <BsEyeSlash />
                                                        )}
                                                    </button>
                                                </div>

                                                <span className="ui-form-lable-error">
                                                    {getFormSubmit &&
                                                        getPassword.length <
                                                            1 &&
                                                        "Enter Password"}
                                                </span>
                                            </Form.Group>
                                            <ReCAPTCHA
                                                ref={recaptchaRef1}
                                                className="mt-3 captcha"
                                                sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                                                onChange={captchaHandler}
                                                style={{
                                                    display: "block !important",
                                                }}
                                            />
                                            {getFormSubmit && getCaptcha.length < 1 && (
                                                <span className="ui-form-lable-error text-center d-blcok">
                                                    Captcha is required! Refresh the page
                                                </span>
                                            )}
                                            <div className="ui-pwd-strength">
                                                {getTotalLength === 0 ? (
                                                    <>
                                                        <p>Too low</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        {getTotalLength <=
                                                            2 && (
                                                            <>
                                                                <p>Too low</p>
                                                            </>
                                                        )}
                                                        {getTotalLength <= 5 &&
                                                            getTotalLength >
                                                                2 && (
                                                                <>
                                                                    <p>
                                                                        Medium
                                                                    </p>
                                                                </>
                                                            )}
                                                        {getTotalLength > 5 && (
                                                            <>
                                                                <p>Strong</p>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                                <div className="ul-pwd-mark-circle">
                                                    {getTotalLength === 0 ? (
                                                        <>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {getTotalLength <=
                                                                2 && (
                                                                <>
                                                                    <span class="low"></span>
                                                                    <span class="low"></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </>
                                                            )}
                                                            {getTotalLength <=
                                                                5 &&
                                                                getTotalLength >
                                                                    2 && (
                                                                    <>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </>
                                                                )}
                                                            {getTotalLength >
                                                                5 && (
                                                                <>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <ul className="ui-form-pwd-notify">
                                                {!getPwdLength && (
                                                    <li>
                                                        At least 8 characters.
                                                    </li>
                                                )}
                                                {!getNumOrSimble && (
                                                    <li>
                                                        Besides letters include
                                                        at least a number or
                                                        symbol.
                                                    </li>
                                                )}
                                                {!getPwdInSensitive && (
                                                    <li>
                                                        Password is
                                                        case-sensitive.
                                                    </li>
                                                )}
                                                <li>
                                                    Avoid using the same
                                                    passwort for miltiple sites.
                                                </li>
                                            </ul>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Create your account
                                            </Button>
                                        </Form>
                                    </>
                                )}
                                {isFormSelected === 0 && (
                                    <>
                                        <Form onSubmit={formHandler}>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Legal business name"
                                                    variant="outlined"
                                                    size="small"
                                                    value={getFullName}
                                                    fullWidth
                                                    onChange={fullnameHandler}
                                                    error={
                                                        getFormSubmit &&
                                                        getFullName.length <
                                                            1 &&
                                                        true
                                                    }
                                                />
                                                <span className="ui-form-lable-error">
                                                    {getFormSubmit &&
                                                        getFullName.length <
                                                            1 &&
                                                        "Please enter the business or DBA name."}
                                                </span>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Legal business email"
                                                    variant="outlined"
                                                    size="small"
                                                    value={getEmail}
                                                    fullWidth
                                                    onChange={emailHandler}
                                                    error={
                                                        getFormSubmit &&
                                                        getEmail.length < 1 &&
                                                        true
                                                    }
                                                />
                                                <span className="ui-form-lable-error">
                                                    {getFormSubmit &&
                                                        getEmail.length < 1 &&
                                                        "Please enter your email address."}
                                                </span>
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <div className="ui-form-pwd">
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="Password"
                                                        variant="outlined"
                                                        size="small"
                                                        fullWidth
                                                        type="password"
                                                        ref={pwdInputRef}
                                                        value={getPassword}
                                                        onChange={pwdHandler}
                                                        error={
                                                            getFormSubmit &&
                                                            getPassword.length <
                                                                1 &&
                                                            true
                                                        }
                                                    />
                                                    <button
                                                        onClick={
                                                            isPwdShowedHandler
                                                        }
                                                        type="button"
                                                    >
                                                        {isPwdShow ? (
                                                            <BsEye />
                                                        ) : (
                                                            <BsEyeSlash />
                                                        )}
                                                    </button>
                                                </div>
                                                <span className="ui-form-lable-error">
                                                    {getFormSubmit &&
                                                        getPassword.length <
                                                            1 &&
                                                        "Please make your password unique."}
                                                </span>
                                            </Form.Group>
                                            <ReCAPTCHA
                                                ref={recaptchaRef2}

                                                className="mt-3 captcha"
                                                sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                                                onChange={captchaHandler}
                                                style={{
                                                    display: "block !important",
                                                }}
                                            />
                                            {getFormSubmit && getCaptcha.length < 1 && (
                                                <span className="ui-form-lable-error text-center d-blcok">
                                                    Captcha is required! Refresh the page
                                                </span>
                                            )}
                                            {/* <div className="ui-phone-no">
                                                <FormControl
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                >
                                                    <InputLabel htmlFor="my-input">
                                                        Legal phone number
                                                    </InputLabel>
                                                    <OutlinedInput
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        type="text"
                                                        endAdornment={
                                                            <InputAdornment position="start">
                                                                <div className="ui-country-code">
                                                                    <PhoneInput
                                                                        international
                                                                        defaultCountry="BD"
                                                                        placeholder="Enter phone number"
                                                                        value={
                                                                            getPhone
                                                                        }
                                                                        onChange={
                                                                            setPhone
                                                                        }
                                                                    />
                                                                </div>
                                                            </InputAdornment>
                                                        }
                                                        label="Legal phone number"
                                                    />
                                                </FormControl>
                                            </div> */}

                                            <div className="ui-pwd-strength">
                                                {getTotalLength === 0 ? (
                                                    <>
                                                        <p>Too low</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        {getTotalLength <=
                                                            2 && (
                                                            <>
                                                                <p>Too low</p>
                                                            </>
                                                        )}
                                                        {getTotalLength <= 5 &&
                                                            getTotalLength >
                                                                2 && (
                                                                <>
                                                                    <p>
                                                                        Medium
                                                                    </p>
                                                                </>
                                                            )}
                                                        {getTotalLength > 5 && (
                                                            <>
                                                                <p>Strong</p>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                                <div className="ul-pwd-mark-circle">
                                                    {getTotalLength === 0 ? (
                                                        <>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {getTotalLength <=
                                                                2 && (
                                                                <>
                                                                    <span class="low"></span>
                                                                    <span class="low"></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </>
                                                            )}
                                                            {getTotalLength <=
                                                                5 &&
                                                                getTotalLength >
                                                                    2 && (
                                                                    <>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </>
                                                                )}
                                                            {getTotalLength >
                                                                5 && (
                                                                <>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <ul className="ui-form-pwd-notify">
                                                {!getPwdLength && (
                                                    <li>
                                                        At least 8 characters.
                                                    </li>
                                                )}
                                                {!getNumOrSimble && (
                                                    <li>
                                                        Besides letters include
                                                        at least a number or
                                                        symbol.
                                                    </li>
                                                )}
                                                {!getPwdInSensitive && (
                                                    <li>
                                                        Password is
                                                        case-sensitive.
                                                    </li>
                                                )}
                                                <li>
                                                    Avoid using the same
                                                    passwort for miltiple sites.
                                                </li>
                                            </ul>

                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Create your account
                                            </Button>
                                        </Form>
                                    </>
                                )}

                                <p>
                                    By Registering, you are agree to NichoShop’s
                                    <a href="#">User Agreement</a> and
                                    <a href="#">
                                        Cookies & Internet Advertising.
                                    </a>
                                </p>



                                <div className="ui-form-social">
                                    <div className="ui-form-head">
                                        <span></span>
                                        <p>or</p>
                                        <span></span>
                                    </div>
                                    <div className="ui-form-social-btn">
                                        <button>
                                            Continue with Google
                                            <img src={GoogleImg} title="google login" alt="google" onClick={googleLogin} />
                                        </button>
                                        {/* <button>
                                            Continue with Apple

                                            <img src={AppleImg} title="apple login" alt="apple" onClick={Applelogin} />
                                        </button> */}
                                        <AppleSignin
                                                /** Auth options passed to AppleID.auth.init() */
                                                authOptions={{
                                                  clientId: "dev.bevaleo",
                                                  //clientId: "admin@nichoshop.com",
                                                  scope: "email name",
                                                  //redirectURI: "http://localhost:3000/",
                                                  redirectURI: "https://bevaleo.dev/",
                                                  state: "",
                                                  nonce: "nonce",
                                                  usePopup: true
                                                }}
                                                /** General props */
                                                uiType="dark"
                                                /** className */
                                                className="apple-auth-btn"
                                                /** Allows to change the button's children, eg: for changing the button text */
                                                buttonExtraChildren="Continue with Apple"
                                                //onSuccess response object will contain the user object on the first time attempt only
                                                onSuccess={(response) => Applelogin(response)}
                                                /** Spread rest props if needed */
                                                // {...rest}
                                        />
                                        <button>
                                            Continue with Facebook
                                            <img src={FbImg} title="facebook login" alt="facebook" onClick={facebookLogin} />
                                        </button>
                                    </div>
                                </div>





                            </div>

                            <div className="ui-form-link">
                                <p>
                                    Already a member? Sign In{" "}
                                    <Link to="/signin">Login</Link>
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

export default Registration;
