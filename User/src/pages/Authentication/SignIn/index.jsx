import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import GoogleImg from "./../../../assets/form-social/google.png";
import AppleImg from "./../../../assets/form-social/apple.png";
import FbImg from "./../../../assets/form-social/fb.png";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useRef, useState , useEffect} from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { TextField } from "@mui/material";
import "react-phone-number-input/style.css";
import { usePostLoginMutation } from "../../../api/services/authApi";
import { setLocalstore ,removeLocalstore} from "../../../helper/localstore/localstore";
import ReCAPTCHA from "react-google-recaptcha";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
//import { useAlert } from "react-alert";
import { clearErrors, login } from "../../../actions/userActions";
import AppleLogin from 'react-apple-login'
import AppleSignin from 'react-apple-signin-auth';
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Querystring = require('querystring');




const SignIn = () => {

      
    console.log(process.env.REACT_APP_APPLE);

    const recaptchaRef = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const alert = useAlert();
  
    const { error, user, isAuthenticated,signin } = useSelector(state=>state.user)

    console.log(user);
    // login api
    const [loginApi, { isLoading }] = usePostLoginMutation();

    const pwdInputRef = useRef();

    // is password show & hidden
    const [isPwdShow, setPwdShow] = useState(false);

    // pasword show & hidden
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

    // form data submit
    const formHandler = async (e) => {
        e.preventDefault();
        setFormSubmit(true);

        if (
            getEmail.length !== 0 &&
            getPassword !== 0 &&
            getCaptcha.length !== 0
        ) {
            // const formData = {
            //     login: getEmail,
            //     password: getPassword,
            //     grecaptcha: getCaptcha,
            // };

            const formData = Querystring['stringify']({
                login: getEmail,
                password: getPassword,
                grecaptcha: getCaptcha,
            })
            dispatch(login(formData));
            // const res = await loginApi(formData);

            // if (res.data) {
            //     setLocalstore("_userLogin", res.data);
            //     navigate("/", { replace: true });
            // }
        }
    };

    const captchaHandler = (value) => {
        console.log(value);
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
        if (signin) {
    
            setLocalstore("_userLogin",user);
            navigate("/add-mobile-number");
            removeLocalstore("_grecaptcha");
            removeLocalstore("signup_data");
            removeLocalstore("choose_method");
            
        }
      }, [dispatch, navigate,signin,recaptchaRef, error ]);


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
                                <h4>Sign in</h4>

                                <Form onSubmit={formHandler}>
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
                                                type="password"
                                                ref={pwdInputRef}
                                                onChange={pwdHandler}
                                                value={getPassword}
                                                error={
                                                    getFormSubmit &&
                                                    getPassword.length < 1 &&
                                                    true
                                                }
                                            />
                                            <button
                                                onClick={isPwdShowedHandler}
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
                                                getPassword.length < 1 &&
                                                "Enter Password"}
                                        </span>
                                    </Form.Group>
                                    <div class="g-recaptcha" data-callback="verifyCallback"></div>
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
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
                                    <Button variant="primary" type="submit">
                                        {isLoading && (
                                            <div
                                                className="spinner-border spinner-border-sm me-3"
                                                role="status"
                                            >
                                                <span className="visually-hidden">
                                                    Loading...
                                                </span>
                                            </div>
                                        )}
                                        Sign in
                                    </Button>
                                </Form>

                                <div className="ui-form-signin-info">
                                    <div className="ui-stay-signin">
                                        <Form.Check
                                            type="checkbox"
                                            label="Stay signed in"
                                            id="stay-signin"
                                        />
                                    </div>
                                    <div className="ui-stay-signin-link">
                                        <Link to="/text-a-temporary-password">
                                            Text a temporary password
                                        </Link>
                                        <Link to="/forget-password">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>

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
                                    Create new a account,{" "}
                                    <Link to="/registration">
                                        Create an account
                                    </Link>
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
