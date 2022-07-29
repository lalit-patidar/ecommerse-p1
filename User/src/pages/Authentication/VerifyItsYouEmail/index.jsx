import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import "react-phone-number-input/style.css";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { getLocalstore ,removeLocalstore} from "../../../helper/localstore/localstore";

import { clearErrors, EmailSuc,VerifyEmailSuc } from "../../../actions/userActions";
import { useDispatch,useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


const VerifyItsYouEmail = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const { error,message,email_pwd } = useSelector(state=>state.forgotPassword)

    const { error, message ,email_verify} = useSelector(state=>state.email);

    console.log(error);
    console.log(message);
    console.log(email_verify);

    const data = getLocalstore("choose_method");
    const dataz = getLocalstore("single-use-code");

    const [getFormSubmit, setFormSubmit] = useState(false);
    const [getSocCode, setSocCode] = useState("");
    const [emailotpss, setemailotpss] = useState(false);

    const soccodeHandler = (e) => {
        setSocCode(e.target.value);
    };

    const ResendEmailsSUC = async (e) => {
        e.preventDefault();
        const email = data.email;

        dispatch(EmailSuc(email));
        Toastify(
            {
            text: `We’ve sent a Single-Use Code (SUC) to ${(data?.email)?(data?.email):(dataz?.email)}`,
            className: "info",
            style: {
                background:
                    "linear-gradient(to right, #00b09b, #96c93d)",
                size: 10,
            },
            close: true,
        }
        ).showToast();
    }

    // form data submit
    const formHandler = (e) => {
        e.preventDefault();
        setFormSubmit(true);
        if(data?.type ==="Forget_OTP"){
            console.log(data.type);
            var datas ={
                suc_type:"0",
                suc:getSocCode,
            }
            console.log(datas);
            dispatch(VerifyEmailSuc(datas))
            setemailotpss(true);
        } else {
            var datass ={
                suc_type:"2",
                suc:getSocCode,
            }
            console.log(datass);
            dispatch(VerifyEmailSuc(datass))
            setemailotpss(true);
        }
        
    };


    useEffect(() => {
        if (error) {
            //alert.show(error);
            setemailotpss(false);
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
        else {
            if(data?.type ==="Forget_OTP"){
                if (email_verify) {
                    if(emailotpss){
                        navigate("/change-new-password");
                        //removeLocalstore("choose_method");
                        removeLocalstore("verifyphone");
                        removeLocalstore("single-use-code");
                        setemailotpss(false);
                    }
                }
            } else {
                if (email_verify) {
                    if(emailotpss){
                        navigate("/");
                        removeLocalstore("single-use-code");
                        removeLocalstore("verifyphone");
                        removeLocalstore("choose_method");
                        setemailotpss(false);
                    }
                }
            }
        }
      }, [dispatch, navigate, error]);


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
                                <h4>Verify that it’s you</h4>
                                <p className="text-start ui-add-mob-info mb-3">
                                    We’ve sent a Single-Use Code (SUC) to this
                                    email address: {(data?.email)?(data?.email):(dataz?.email)}
                                </p>

                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter SUC"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={soccodeHandler}
                                            value={getSocCode}
                                            error={
                                                getFormSubmit &&
                                                getSocCode.length < 1 &&
                                                true
                                            }
                                        />
                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getSocCode.length < 1 && (
                                                    <>
                                                        That’s not a match. Try
                                                        again or let us{" "}
                                                        <a href="#">
                                                            Resend the SUC
                                                        </a>
                                                    </>
                                                )}
                                        </span>
                                    </Form.Group>
                                    <div className="ui-vy-button">
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                        >
                                            Sign in
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                navigate("/signin", {
                                                    replace: true,
                                                });
                                            }}
                                            variant="outlined"
                                            fullWidth
                                        >
                                            Cancel
                                        </Button>
                                    </div>
                                    <p className="ui-vy-footer-link">
                                        Still no code?{" "}
                                        <Link to="" onClick={ResendEmailsSUC}>Resend SUC</Link>
                                    </p>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FormFooter />
        </>
    );
};

export default VerifyItsYouEmail;
