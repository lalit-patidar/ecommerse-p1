import React, { useState } from "react";
import Footer from "../../container/Footer/footer";
import "react-confirm-alert/src/react-confirm-alert.css";
import ReCAPTCHA from "react-google-recaptcha";
import "./css/signin.css";
import { postRequest } from "../../helper/ajax/ajaxRequest";
import { Link } from "react-router-dom";

const SignIn = () => {
    let [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [reCAPTCHA, setRecaptcha] = useState("");

    const inputValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "id":
                setId(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const [getFormEmpty, setFormEmpty] = useState(false);
    const [isIdPasswordMatch, setIdPasswordMatch] = useState(false);

    function onChange(value) {
        setRecaptcha(value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (
            id.length !== 0 &&
            password.length !== 0 &&
            reCAPTCHA.length !== 0
        ) {
            postRequest(
                {},
                `/admin/auth/login-with-prompt?login=${id}&password=${password}&rememberMe=true&grecaptcha=${reCAPTCHA}`
            )
                .then((res) => {
                    if (Boolean(res.data.data)) {
                        setId("");
                        setPassword("");
                        setRecaptcha("");
                        setFormEmpty(false);
                        window.open(res.data.data);
                    }
                })
                .catch((err) => {
                    setIdPasswordMatch(true);
                });
        } else {
            setFormEmpty(true);
        }
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="row  my-4">
                    <img
                        src="assets/img/NS Logo.svg"
                        alt=""
                        className="m-auto"
                        style={{ width: "200px" }}
                    />
                </div>
                <div className="row col-lg-4 col-md-6 col-sm-10 offset-lg-4 offset-md-3 offset-sm-1">
                    <div className="form-layout-signinpage px-4 py-1">
                        <form onSubmit={submitHandler}>
                            <h5 className="text-center my-3">
                                <b>Sign in</b>
                            </h5>
                            <hr />
                            {isIdPasswordMatch && (
                                <span className="color-red">
                                    <img
                                        src="assets/img/alert-circle.svg"
                                        alt="icon"
                                    />{" "}
                                    Your email/user ID or password is incorrect.
                                </span>
                            )}

                            <div>
                                <div className="form-group has-float-label">
                                    <input
                                        type="text"
                                        className="form-control mt-3"
                                        name="id"
                                        value={id}
                                        onChange={inputValue}
                                        id="id"
                                        placeholder="ID"
                                    />
                                    <label htmlFor="fullname">ID</label>
                                </div>
                                {getFormEmpty && id.length < 1 && (
                                    <span className="color-red">
                                        Id is required!
                                    </span>
                                )}
                            </div>

                            <div className="form-group has-float-label">
                                <input
                                    type="password"
                                    className="form-control mt-3"
                                    name="password"
                                    value={password}
                                    onChange={inputValue}
                                    id="password"
                                    placeholder="Password"
                                />
                                <label htmlFor="fullname">Password</label>
                            </div>
                            {getFormEmpty && password.length < 1 && (
                                <span className="color-red">
                                    Password is required!
                                </span>
                            )}

                            <ReCAPTCHA
                                className="mt-3"
                                sitekey="6Lef6nQgAAAAADoRd2Ps76UfUklHu1v5k_BIYCw1"
                                onChange={onChange}
                            />
                            {getFormEmpty && reCAPTCHA.length < 1 && (
                                <span className="color-red">
                                    Captcha is required!
                                </span>
                            )}

                            <button
                                type="submit"
                                className="button-signinpage my-3 btn btn-primary"
                            >
                                Sign in
                            </button>
                            <div className="row align-right">
                                <Link to="/temporary-password">
                                    <span className="text-primary mb-3 text-signinpage">
                                        Text a temporary password
                                    </span>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};
export default SignIn;
