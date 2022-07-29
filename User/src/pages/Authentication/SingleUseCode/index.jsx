import React, { useState ,useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import { getStore } from "./../../../helper/storeHelper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, EmailSuc ,TextSuc} from "../../../actions/userActions";


import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


const SingleUseCode = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const datas = getStore("single-use-code");    
    //datas.phone = "919630196313";


    const [emailsuc,setemailsuc] = useState(false);
    const [textsuc,settextsuc] = useState(false);


    const { error,email_pwd } = useSelector(state=>state.forgotPassword)
    const { errors,txt_pwd,message } = useSelector(state=>state.mobile)

    console.log(errors);
    console.log(error);
    console.log(txt_pwd);
    console.log(email_pwd);
    console.log(message);


    const Email_suc = async(e) => {
        e.preventDefault();
        //alert(datas.email);
        const email = datas.email
        dispatch(EmailSuc(email))
        setemailsuc(true);
        settextsuc(false);

    };

    const Text_suc = async(e) => {
        e.preventDefault();
        if(datas?.phone){
            console.log("phone");
            const phone = datas.phone
            dispatch(TextSuc(phone))
            settextsuc(true);
            setemailsuc(false);
            //alert(datas.phone);
        } else {
            //alert("Phone no is not verified")
            settextsuc(false);
            setemailsuc(false);
            Toastify(
                {
                text: "Phone no is not verified",
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
        
    };

    useEffect(() => {
        if (errors) {
            //alert.show(error);
            setemailsuc(false);
            settextsuc(false);
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

        if (error) {
            //alert.show(error);
            setemailsuc(false);
            settextsuc(false);
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

        if (email_pwd) {
            if(emailsuc){
                console.log("email");
                navigate("/verify-its-you-email");
                setemailsuc(false);
                settextsuc(false);
            }
        }
        if (txt_pwd) {
            if(textsuc){
                console.log("phone");
                navigate("/verify-its-you-phone");
                settextsuc(false);
                setemailsuc(false);
                //setLocalstore("_userLogin",user);
            }
        }
      }, [dispatch, navigate,txt_pwd,email_pwd, error]);



    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <div className="ui-form-logo">
                            <Logo />
                        </div>
                        <div className="ui-single-code-info">
                            <h4>How do you want to get your single-use code</h4>
                            <Link to="" onClick={Email_suc}>
                                <div className="ui-single-code-box mb-3">
                                    <svg
                                        width="51"
                                        height="32"
                                        viewBox="0 0 51 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M49.227 31.5258C48.6712 31.8343 48.0432 31.9976 47.4038 31.9999H3.64657C3.00606 32.0054 2.37598 31.8416 1.82336 31.5258L16.4091 17.3036L19.9947 20.7999C20.7263 21.4866 21.5945 22.0197 22.5458 22.3662C23.497 22.7128 24.511 22.8654 25.5252 22.8147C26.5387 22.86 27.5512 22.7049 28.5016 22.3586C29.4521 22.0124 30.3208 21.4821 31.0556 20.7999L34.6412 17.3036L49.227 31.5258ZM50.5032 30.2221L35.9175 15.9999L50.5032 1.77777C50.8196 2.31964 50.9871 2.93201 50.9894 3.55554V28.4443C51.0461 29.0742 50.874 29.7034 50.5032 30.2221ZM0.486331 30.2221C0.169955 29.6802 0.00248257 29.0679 0.000140596 28.4443V3.55554C-0.00556454 2.93099 0.162456 2.31662 0.486331 1.77777L15.0721 15.9999L0.486331 30.2221ZM49.227 0.474072L29.7186 19.4962C29.1631 20.0167 28.505 20.4217 27.7841 20.6865C27.0633 20.9514 26.2947 21.0706 25.5252 21.0369C24.7556 21.0706 23.987 20.9514 23.2662 20.6865C22.5453 20.4217 21.8872 20.0167 21.3318 19.4962L1.82336 0.474072C2.37908 0.165581 3.0071 0.00228359 3.64657 0H47.4038C48.0432 0.00227502 48.6712 0.165573 49.227 0.474072Z"
                                            fill="#1FAEFF"
                                        />
                                    </svg>
                                    <div className="ui-scb-right">
                                        <p>Get an email</p>
                                        <p>
                                            We’ll send a code to your email {" "}
                                            <b>{datas?.email}</b>
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link to="" onClick={Text_suc}>
                                <div className="ui-single-code-box">
                                    <svg
                                        width="51"
                                        height="37"
                                        viewBox="0 0 51 37"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M45.1154 0H5.88462C4.32392 0 2.82714 0.531573 1.72356 1.47778C0.619985 2.42399 0 3.70732 0 5.04545V23.5455C0 24.8836 0.619985 26.1669 1.72356 27.1131C2.82714 28.0593 4.32392 28.5909 5.88462 28.5909H7.84615V35.3182C7.84482 35.6464 7.95554 35.9678 8.16468 36.2428C8.37381 36.5177 8.6722 36.7342 9.02308 36.8655C9.27254 36.9519 9.53866 36.9975 9.80769 37C10.3032 36.9985 10.7798 36.8363 11.1415 36.5459L21.1258 28.5909H45.1154C46.6761 28.5909 48.1729 28.0593 49.2764 27.1131C50.38 26.1669 51 24.8836 51 23.5455V5.04545C51 3.70732 50.38 2.42399 49.2764 1.47778C48.1729 0.531573 46.6761 0 45.1154 0ZM31.3846 20.1818H11.7692C11.249 20.1818 10.7501 20.0046 10.3822 19.6892C10.0144 19.3738 9.80769 18.946 9.80769 18.5C9.80769 18.054 10.0144 17.6262 10.3822 17.3108C10.7501 16.9954 11.249 16.8182 11.7692 16.8182H31.3846C31.9048 16.8182 32.4038 16.9954 32.7716 17.3108C33.1395 17.6262 33.3462 18.054 33.3462 18.5C33.3462 18.946 33.1395 19.3738 32.7716 19.6892C32.4038 20.0046 31.9048 20.1818 31.3846 20.1818ZM39.2308 11.7727H11.7692C11.249 11.7727 10.7501 11.5955 10.3822 11.2801C10.0144 10.9647 9.80769 10.537 9.80769 10.0909C9.80769 9.64486 10.0144 9.21709 10.3822 8.90168C10.7501 8.58628 11.249 8.40909 11.7692 8.40909H39.2308C39.751 8.40909 40.2499 8.58628 40.6178 8.90168C40.9856 9.21709 41.1923 9.64486 41.1923 10.0909C41.1923 10.537 40.9856 10.9647 40.6178 11.2801C40.2499 11.5955 39.751 11.7727 39.2308 11.7727Z"
                                            fill="#1FAEFF"
                                        />
                                    </svg>

                                    <div className="ui-scb-right">
                                        <p>Get a text</p>
                                        <p>
                                            We’ll text a code to your phone{" "}
                                            <b>{datas?.phone}</b>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <h4>Having trouble resetting your password?</h4>
                            <p>
                                If you no longer use the email address or the
                                mobile phone number associated with your
                                NichoShop account, you can contact{" "}
                                <a href="#">Customer Support</a> for help
                                restoring access to your account.
                            </p>
                            <p>
                                *By selecting to Get a text, mobile phone
                                charges my apply.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleUseCode;
