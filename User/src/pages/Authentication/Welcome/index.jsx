import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useRef, useState, useEffect } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { TextField } from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { getLocalstore } from "../../../helper/localstore/localstore";
import { clearErrors, login } from "../../../actions/userActions";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { setLocalstore ,removeLocalstore} from "../../../helper/localstore/localstore";

import "react-phone-number-input/style.css";

const Querystring = require('querystring');

const Welcome = () => {
    const pwdInputRef = useRef();
    const recaptchaRef = useRef(null)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const { error, user, isAuthenticated,signin } = useSelector(state=>state.user)

    const data = getLocalstore("_userLogin")
    console.log(data);

    // is password show & hidden
    const [isPwdShow, setPwdShow] = useState(false);
    const [getCaptcha, setCaptcha] = useState("");
    const [getsignin, setsignin] = useState(false);

    // submit form
    const [getPassword, setPassword] = useState("");
    const [getFormSubmit, setFormSubmit] = useState(false);

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


    // full name input handler

    const pwdHandler = (e) => {
        setPassword(e.target.value);
    };

    // captcha handler
    const captchaHandler = (value) => {
        console.log(value);
        setCaptcha(value);

    };


    // form data submit
    const formHandler = async (e) => {
        e.preventDefault();
        setFormSubmit(true);
        
        if (
            getPassword !== 0 &&
            getCaptcha.length !== 0
        ) {
            // const formData = {
            //     login: getEmail,
            //     password: getPassword,
            //     grecaptcha: getCaptcha,
            // };

            const formData = Querystring['stringify']({
                login: data.email,
                password: getPassword,
                grecaptcha: getCaptcha,
            })
            dispatch(login(formData));
            setsignin(true);
        }
    };
    useEffect(() => {
        if (error) {
            //alert.show(error);
            setsignin(false);
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
            if (signin) {
                if(getsignin){
                    setLocalstore("_userLogin",user);
                    navigate("/");
                    removeLocalstore("_grecaptcha");
                    removeLocalstore("signup_data");
                    removeLocalstore("choose_method");
                    setsignin(false);
                }
            }
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
                                <h4>Welcome</h4>
                                <div className="ui-welcome-form-info pb-4 mb-4 border-bottom">
                                    <p>{data?.email}</p>
                                    <p>Not you? Switch account</p>
                                    <p>
                                        Please sign in again to make changes to
                                        your account.
                                    </p>
                                </div>

                                <Form onSubmit={formHandler}>
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

export default Welcome;
