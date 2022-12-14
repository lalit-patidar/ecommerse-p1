import { TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, forgotPassword } from "../../../actions/userActions";
import { usePostLoginMutation } from "../../../api/services/authApi";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { setLocalstore } from "../../../helper/localstore/localstore";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const ForgetPassword = () => {

    const recaptchaRef = useRef(null)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // login api
    const [loginApi, { isLoading }] = usePostLoginMutation();
    const pwdInputRef = useRef();
    const { error,fp,message } = useSelector(state=>state.forgotPassword)

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
    const [getCaptcha, setCaptcha] = useState("");
    const [getFormSubmit, setFormSubmit] = useState(false);
    const [getfp,setfp]=useState(false)
    // full name input handler

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const captchaHandler = (value) => {
        setCaptcha(value);
    };

    // form data submit
    const formHandler = async (e) => {
        e.preventDefault();
        setFormSubmit(true);
        if (getEmail.length !== 0 && getCaptcha.length !== 0) {
            dispatch(forgotPassword(getEmail,getCaptcha))
            setfp(true)
        }
    };

    useEffect(() => {
        if (error) {
            setfp(false);
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
            if (message) {
                if(getfp){
                    // console.log("hello");
                    message.type = "Forget_OTP";
                    setLocalstore("choose_method",message);
                    navigate("/choose-method");
                    setfp(false);
                }      
            }
        }
    }, [dispatch, navigate,setfp,fp,message,recaptchaRef,error]);


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
                                <h4 className="mb-3">Password assistance</h4>

                                <Form onSubmit={formHandler}>
                                    <p className="text-start">
                                        Please enter your email or username
                                    </p>
                                    <Form.Group className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Email or username"
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
                                        Continue
                                    </Button>
                                </Form>
                            </div>

                            <div className="ui-form-link text-center">
                                <p>
                                    <p className="mb-2">
                                        Trouble reset your password?,
                                    </p>
                                    <p className="mb-2">
                                        <Link to="/text-a-temporary-password">
                                            Text a temporary password
                                        </Link>
                                    </p>
                                    <p className="mb-2">
                                        <Link to="/registration">
                                            Register for a new account
                                        </Link>
                                    </p>
                                    <p className="mb-2">
                                        <Link to="#/">
                                            Contact Customer Support
                                        </Link>
                                    </p>
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

export default ForgetPassword;



// 6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1





// original
// 6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1