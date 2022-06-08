import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import "./authform.scss";
import GoogleImg from "./../../../assets/form-social/google.png";
import AppleImg from "./../../../assets/form-social/apple.png";
import FbImg from "./../../../assets/form-social/fb.png";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useRef, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import TextField from "@mui/material/TextField";

const SignUp = () => {
    const pwdInputRef = useRef();

    // 2 type form  tab
    const [isFormSelected, setFormSelected] = useState(1);
    const peronalHendler = () => {
        setFormSelected(1);
    };
    const businessHendler = () => {
        setFormSelected(0);
    };

    // is password show & hidden
    const [isPwdShow, setPwdShow] = useState(false);

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

    const [getFullName, setFullName] = useState("");
    const [getEmail, setEmail] = useState("");
    const [getPassword, setPassword] = useState("");

    const [getPwdLength, setPwdLength] = useState(false);
    const [getNumOrSimble, setNumOrSimble] = useState(false);
    const [getPwdInSensitive, setPwdInSensitive] = useState(false);
    const [getTotalLength, setTotalLength] = useState(0);

    const fullnameHandler = (e) => {
        setFullName(e.target.value);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    const pwdHandler = (e) => {
        setPassword(e.target.value);
        e.target.value.length !== 0 ? setPwdLength(true) : setPwdLength(false);

        setTotalLength(e.target.value.length);

        if (e.target.value.length !== 0) {
            e.target.value.match(/[^a-zA-z]/) !== null
                ? setNumOrSimble(true)
                : setNumOrSimble(false);
        } else {
            setNumOrSimble(false);
        }
        if (e.target.value.length !== 0) {
            e.target.value.match(/[a-zA-Z]/) !== null
                ? setPwdInSensitive(true)
                : setPwdInSensitive(false);
        } else {
            setPwdInSensitive(false);
        }
    };

    const formHandler = (e) => {
        e.preventDefault();
        alert("ok");
    };

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
                                <h4>It’s fast and free to get started</h4>
                                <div className="ui-form-option">
                                    {["radio"].map((type) => (
                                        <div
                                            key={`inline-${type}`}
                                            className="mb-3 d-flex align-items-center"
                                        >
                                            <Form.Check
                                                inline
                                                label="Personal account"
                                                name="group1"
                                                checked={
                                                    isFormSelected === 1
                                                        ? true
                                                        : false
                                                }
                                                type={type}
                                                id={`inline-${type}-1`}
                                                onChange={peronalHendler}
                                            />
                                            <Form.Check
                                                inline
                                                label="Business account"
                                                name="group1"
                                                type={type}
                                                checked={
                                                    isFormSelected === 0
                                                        ? true
                                                        : false
                                                }
                                                id={`inline-${type}-2`}
                                                onChange={businessHendler}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {isFormSelected === 1 && (
                                    <>
                                        <Form onSubmit={formHandler}>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Full name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    onChange={fullnameHandler}
                                                    value={getFullName}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Email"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    onChange={emailHandler}
                                                    value={getEmail}
                                                />
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
                                                    />
                                                    <button
                                                        onClick={
                                                            isPwdShowedHandler
                                                        }
                                                        type="button"
                                                    >
                                                        {isPwdShow ? (
                                                            <BsEye />
                                                        ) : (
                                                            <BsEyeSlash />
                                                        )}
                                                    </button>
                                                </div>
                                            </Form.Group>
                                            <div className="ui-pwd-strength">
                                                {getTotalLength === 0 ? (
                                                    <>
                                                        <p>Too low</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        {getTotalLength <=
                                                            2 && (
                                                            <>
                                                                <p>Too low</p>
                                                            </>
                                                        )}
                                                        {getTotalLength <= 5 &&
                                                            getTotalLength >
                                                                2 && (
                                                                <>
                                                                    <p>
                                                                        Medium
                                                                    </p>
                                                                </>
                                                            )}
                                                        {getTotalLength > 5 && (
                                                            <>
                                                                <p>Strong</p>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                                <div className="ul-pwd-mark-circle">
                                                    {getTotalLength === 0 ? (
                                                        <>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {getTotalLength <=
                                                                2 && (
                                                                <>
                                                                    <span class="low"></span>
                                                                    <span class="low"></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </>
                                                            )}
                                                            {getTotalLength <=
                                                                5 &&
                                                                getTotalLength >
                                                                    2 && (
                                                                    <>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </>
                                                                )}
                                                            {getTotalLength >
                                                                5 && (
                                                                <>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <ul className="ui-form-pwd-notify">
                                                {!getPwdLength && (
                                                    <li>
                                                        At least 8 characters.
                                                    </li>
                                                )}
                                                {!getNumOrSimble && (
                                                    <li>
                                                        Besides letters include
                                                        at least a number or
                                                        symbol.
                                                    </li>
                                                )}
                                                {!getPwdInSensitive && (
                                                    <li>
                                                        Password is
                                                        case-sensitive.
                                                    </li>
                                                )}
                                                <li>
                                                    Avoid using the same
                                                    passwort for miltiple sites.
                                                </li>
                                            </ul>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Create your account
                                            </Button>
                                        </Form>
                                    </>
                                )}
                                {isFormSelected === 0 && (
                                    <>
                                        <Form onSubmit={formHandler}>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Legal business name"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    onChange={fullnameHandler}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3">
                                                <TextField
                                                    id="outlined-basic"
                                                    label="Legal business email"
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    onChange={emailHandler}
                                                />
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
                                                    />
                                                    <button
                                                        onClick={
                                                            isPwdShowedHandler
                                                        }
                                                        type="button"
                                                    >
                                                        {isPwdShow ? (
                                                            <BsEye />
                                                        ) : (
                                                            <BsEyeSlash />
                                                        )}
                                                    </button>
                                                </div>
                                            </Form.Group>
                                            <div className="ui-pwd-strength">
                                                {getTotalLength === 0 ? (
                                                    <>
                                                        <p>Too low</p>
                                                    </>
                                                ) : (
                                                    <>
                                                        {getTotalLength <=
                                                            2 && (
                                                            <>
                                                                <p>Too low</p>
                                                            </>
                                                        )}
                                                        {getTotalLength <= 5 &&
                                                            getTotalLength >
                                                                2 && (
                                                                <>
                                                                    <p>
                                                                        Medium
                                                                    </p>
                                                                </>
                                                            )}
                                                        {getTotalLength > 5 && (
                                                            <>
                                                                <p>Strong</p>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                                <div className="ul-pwd-mark-circle">
                                                    {getTotalLength === 0 ? (
                                                        <>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {getTotalLength <=
                                                                2 && (
                                                                <>
                                                                    <span class="low"></span>
                                                                    <span class="low"></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </>
                                                            )}
                                                            {getTotalLength <=
                                                                5 &&
                                                                getTotalLength >
                                                                    2 && (
                                                                    <>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span class="medium"></span>
                                                                        <span></span>
                                                                        <span></span>
                                                                    </>
                                                                )}
                                                            {getTotalLength >
                                                                5 && (
                                                                <>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                    <span class="strong"></span>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                            <ul className="ui-form-pwd-notify">
                                                {!getPwdLength && (
                                                    <li>
                                                        At least 8 characters.
                                                    </li>
                                                )}
                                                {!getNumOrSimble && (
                                                    <li>
                                                        Besides letters include
                                                        at least a number or
                                                        symbol.
                                                    </li>
                                                )}
                                                {!getPwdInSensitive && (
                                                    <li>
                                                        Password is
                                                        case-sensitive.
                                                    </li>
                                                )}
                                                <li>
                                                    Avoid using the same
                                                    passwort for miltiple sites.
                                                </li>
                                            </ul>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                            >
                                                Create your account
                                            </Button>
                                        </Form>
                                    </>
                                )}

                                <p>
                                    By Registering, you are agree to NichoShop’s
                                    <a href="#">User Agreement</a> and
                                    <a href="#">
                                        Cookies & Internet Advertising.
                                    </a>
                                </p>
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
                                    Already a member? Sign In{" "}
                                    <Link to="/login">Login</Link>
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

export default SignUp;
