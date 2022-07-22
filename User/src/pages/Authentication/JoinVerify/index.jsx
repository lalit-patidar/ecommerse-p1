import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OutsideClickHandler from "react-outside-click-handler";
import { getStore } from "./../../../helper/storeHelper";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearErrors, ResendEmail } from "../../../actions/userActions";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const JoinVerify = () => {
    /**
     * sign up : email verification data store
     */

    const dispatch = useDispatch();
    
    const [getSignUpInfo, setSignUpInfo] = useState();
    const [getMailBoxClicked, setIsMailBoxClicked] = useState(false);

    const { error, message,user } = useSelector(state=>state.user)

    console.log(message);
    console.log(user);
    console.log(error);
    //console.log(getSignUpInfo);

    const ResendEmails = async (e) => {
        e.preventDefault();
        const datas = {
            user:getSignUpInfo.email
        }
        dispatch(ResendEmail(datas));
    }

    useEffect(() => {
        const data = getStore("signup_data");
        setSignUpInfo(data);

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

    }, [dispatch,user,error,message]);

    // main options
    


    return (
        <>
            <div className="ui-join-mail-activation mb-4">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="d-flex justify-content-center p-4">
                                <Logo />
                            </div>
                            <div className="ui-join-box">
                                <div className="ui-join-head">
                                    <h4>
                                        Hi John, you have successfully joined
                                        NichoShop.
                                    </h4>
                                </div>
                                <div className="ui-join-content">
                                    <p>
                                        An email containing an activation link
                                        has been sent to: <br />
                                        <b>{getSignUpInfo?.email}</b>
                                    </p>
                                    <p>
                                        Please log in your email and click the
                                        activation link within 24 hours to
                                        complete your registration.
                                    </p>
                                    <div className="ui-join-mail-box">
                                        <OutsideClickHandler
                                            onOutsideClick={() => {
                                                setIsMailBoxClicked(false);
                                            }}
                                        >
                                            <button
                                                onClick={() => {
                                                    setIsMailBoxClicked(
                                                        !getMailBoxClicked
                                                    );
                                                }}
                                            >
                                                I haven’t received the email
                                            </button>
                                            {getMailBoxClicked && (
                                                <div className="ui-join-mail-info">
                                                    <ul>
                                                        <li>
                                                            Please check your
                                                            spam folder
                                                        </li>
                                                        <li>
                                                            <p>
                                                                If you haven’t
                                                                received the
                                                                email
                                                                <button onClick={ResendEmails}>
                                                                    Click here
                                                                    to resend
                                                                    the email
                                                                </button>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                Still not
                                                                received?
                                                                <button>
                                                                    <Link to="/registration">
                                                                        Try using
                                                                        another
                                                                        email
                                                                        address
                                                                    </Link>
                                                                    
                                                                </button>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </OutsideClickHandler>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default JoinVerify;
