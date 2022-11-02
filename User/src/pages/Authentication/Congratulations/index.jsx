import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "toastify-js/src/toastify.css";
import { VerifyUsingEmailURL } from "../../../actions/userActions";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";

const Congratulations = () => {
    /**
     * sign up : email verification data store
     */
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [getSignUpInfo, setSignUpInfo] = useState();
    const { isAuthenticated } = useSelector(state=>state.user);

    useEffect(() =>{
        if(isAuthenticated) navigate('/') ;
    },[isAuthenticated]);

    const getParameterByName = (name) => {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const VerifyEmail = async () => {
        const data = {
            userId: getParameterByName('userId'),
            code: getParameterByName('code')
        }
        dispatch(VerifyUsingEmailURL(data));
    }

    useEffect(() => {
        VerifyEmail();  
    }, []);

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
                                    Please wait while we are verifying your email... <br />
                                        <b>{getSignUpInfo?.email}</b>
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Congratulations;


