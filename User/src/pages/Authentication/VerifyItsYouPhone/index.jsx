import { Container, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import "react-phone-number-input/style.css";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { getLocalstore,setLocalstore ,removeLocalstore} from "../../../helper/localstore/localstore";
import { clearErrors, VerifyMobile } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const VerifyItsYouPhone = () => {

    const user = getLocalstore("_userLogin")
    const data = getLocalstore("verifyphone")

    //console.log(data);

    const location = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [getSocCode, setSocCode] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

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
        if (verify) {
            user.phone = "+"+data;
            user.phoneConfirmed = "true";
            setLocalstore("_userLogin",user);
            navigate("/");
            removeLocalstore("verifyphone");
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
                                <h4>Verify that it’s you</h4>
                                <p className="text-start ui-add-mob-info mb-3">
                                    We’re texting a Single-Use Code (SUC) to
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
                                        <Link to="/">Resend SUC</Link>
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
