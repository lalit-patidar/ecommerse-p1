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
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const Querystring = require('querystring');


const SignIn = () => {

      
    const recaptchaRef = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const alert = useAlert();
  
    const { error, user, isAuthenticated,signin } = useSelector(state=>state.user)

    console.log(user);
    console.log(isAuthenticated);
    // login api
    const [loginApi, { isLoading }] = usePostLoginMutation();

    const pwdInputRef = useRef();

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

    useEffect(() => {
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
                                                class="spinner-border spinner-border-sm me-3"
                                                role="status"
                                            >
                                                <span class="visually-hidden">
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
                                            <img src={GoogleImg} alt="logo" />
                                        </button>
                                        <button>
                                            Continue with Apple
                                            <img src={AppleImg} alt="logo" />
                                        </button>
                                        <button>
                                            Continue with Facebook
                                            <img src={FbImg} alt="logo" />
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
