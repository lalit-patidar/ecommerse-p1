import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import "react-phone-number-input/style.css";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { getLocalstore,setLocalstore ,removeLocalstore} from "../../../helper/localstore/localstore";
import { clearErrors, VerifyMobile } from "../../../actions/mobileActions";
import { TextSuc} from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { useCookies } from "react-cookie";

const VerifyItsYouPhone = () => {

    const user = getLocalstore("_userLogin")

    // Add Phone no
    const data = getLocalstore("verifyphone")

    // forget Password
    const dataa = getLocalstore("choose_method");
    // temporary password
    const dataz = getLocalstore("single-use-code");

    const [cookies, setCookie] = useCookies("RememberMe_Nichoshop");

    //console.log(data);

    const location = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [getSocCode, setSocCode] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);
    const [otpss, setotpss] = useState(false);
    const { error, messagess ,verify} = useSelector(state=>state.otp)

    console.log(error);
    console.log(messagess);
    console.log(verify);

    const mobno = location.state;
    console.log(mobno);

    const soccodeHandler = (e) => {
        setSocCode(e.target.value);
    }
    // form data submit
    const formHandler = async(e) => {
        e.preventDefault();
        setFormSubmit(true);
        
        var datas ={
            suc_type:"4",
            suc:getSocCode,
        }
        console.log(datas);
        dispatch(VerifyMobile(datas))
        setotpss(true)
    };
    const ResendTextsSUC = async (e) => {
        e.preventDefault();
        dispatch(TextSuc(data));
        setotpss(false)
        Toastify(
            {
            text: `We???ve sent a Single-Use Code (SUC) to this ${data} Mobile no`,
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

    useEffect(() => {
        if (error) {
            //alert.show(error);
            setotpss(false);
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
            if(dataa?.type ==="Forget_OTP"){
                if (verify) {
                    if(otpss){
                        navigate("/change-new-password");
                        removeLocalstore("verifyphone");
                        //removeLocalstore("choose_method");
                        removeLocalstore("single-use-code");
                        setotpss(false)
                    }
                }
            } else{
                    if (verify) {
                        if(otpss){
                            if(data?.type === "add_phone"){
                                user.phone = "+"+data;
                                user.phoneConfirmed = "true";
                                setLocalstore("_userLogin",user);
                            }
                            setCookie("RememberMe_Nichoshop", user, {
                                path: "/"
                            });
                            navigate("/");
                            removeLocalstore("verifyphone");
                            removeLocalstore("choose_method");
                            removeLocalstore("single-use-code");
                            setotpss(false)
                        }
                    }
                }
        }
      }, [dispatch, navigate,verify, messagess, error]);


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
                                <h4>Verify that it???s you</h4>
                                <p className="text-start ui-add-mob-info mb-3">
                                    We???re texting a Single-Use Code (SUC) to
                                    this mobile number
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
                                                        That???s not a match. Try
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
                                        <Link to=""onClick={ResendTextsSUC}>Resend SUC</Link>
                                    </p>
                                    <p className="ui-vpm-footer">
                                        Mobile charges may apply
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

export default VerifyItsYouPhone;
