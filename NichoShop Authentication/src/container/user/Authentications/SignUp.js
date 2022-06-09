// React
// React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 3rd party components
import {
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Compoenents
import Header from "../../../components/AuthComponents/Header";
import Footer from "../../../components/AuthComponents/Footer";
import SuccessMessage from "../../../components/AuthComponents/SuccessMessage";
import SocialLogin from "../../../components/AuthComponents/SocialLogin";

// Styles
import "../../../assets/styles/auth.css";
import MuiPhoneNumber from "material-ui-phone-number";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [accountRadio, setAccountRadio] = useState("personal");
    const [authSpinner, setAuthSpinner] = useState(false);

    const PersonalAccountSchema = yup.object({
        fullname: yup.string("Enter your full name").required("Enter name"),
        email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Please enter your email address."),
        password: yup
            .string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Please make your password unique.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    });

    const BussinessAccountSchema = yup.object({
        bussinessName: yup
            .string("Enter your full name")
            .required("Enter name"),
        email: yup
            .string("Enter your email")
            .email("Enter a valid email")
            .required("Please enter your email address."),
        password: yup
            .string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Please make your password unique.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const accountChangeHandler = (event) => {
        setAccountRadio(event.target.value);
    };

    return (
        <main>
            <div className="signUpContainer authContainer">
                {/* Header  */}
                <Header>
                    Already a member?
                    <Link to="/auth/signin" className="redirectLink ms-1">
                        Sign In
                    </Link>
                </Header>
                {/* Header End  */}

                {/* Form Section  */}
                <section className="authFormSection">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle">
                                <h2>It’s fast and free to get started</h2>
                            </div>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                onChange={accountChangeHandler}
                                value={accountRadio}
                                className="radioBox"
                            >
                                <FormControlLabel
                                    value="personal"
                                    control={<Radio color="success" />}
                                    label="Personal account"
                                />
                                <FormControlLabel
                                    value="bussiness"
                                    control={<Radio color="success" />}
                                    label="Business account"
                                />
                            </RadioGroup>
                            {accountRadio === "personal" ? (
                                <Formik
                                    initialValues={{
                                        fullname: "",
                                        email: "",
                                        password: "",
                                        account: "personal",
                                    }}
                                    validationSchema={PersonalAccountSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }}
                                >
                                    {(props) => (
                                        <form onSubmit={props.handleSubmit}>
                                            {authSpinner ? (
                                                <div className="formSpinner">
                                                    <div className="loading"></div>
                                                </div>
                                            ) : null}
                                            <div className="textField">
                                                <TextField
                                                    fullWidth
                                                    id="fullname"
                                                    name="fullname"
                                                    label="Full Name"
                                                    type="text"
                                                    variant="outlined"
                                                    size="small"
                                                    className={
                                                        props.touched
                                                            .fullname &&
                                                        props.errors.fullname
                                                            ? "error"
                                                            : ""
                                                    }
                                                    value={
                                                        props.values.fullname
                                                    }
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                />
                                                <ErrorMessage name="fullname">
                                                    {(msg) => (
                                                        <p className="formError">
                                                            {msg}
                                                        </p>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="textField">
                                                <TextField
                                                    fullWidth
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    variant="outlined"
                                                    size="small"
                                                    className={
                                                        props.touched.email &&
                                                        props.errors.email
                                                            ? "error"
                                                            : ""
                                                    }
                                                    value={props.values.email}
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                />
                                                <ErrorMessage name="email">
                                                    {(msg) => (
                                                        <p className="formError">
                                                            {msg}
                                                        </p>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="textField">
                                                <FormControl
                                                    variant="outlined"
                                                    size="small"
                                                    className={
                                                        props.touched
                                                            .password &&
                                                        props.errors.password
                                                            ? "error w-100"
                                                            : "w-100"
                                                    }
                                                >
                                                    <InputLabel htmlFor="Password">
                                                        Password
                                                    </InputLabel>
                                                    <OutlinedInput
                                                        id="Password"
                                                        name="password"
                                                        type={
                                                            showPassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        value={
                                                            props.values
                                                                .password
                                                        }
                                                        onChange={
                                                            props.handleChange
                                                        }
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={
                                                                        handleClickShowPassword
                                                                    }
                                                                    onMouseDown={
                                                                        handleMouseDownPassword
                                                                    }
                                                                    edge="end"
                                                                >
                                                                    {showPassword ? (
                                                                        <FiEyeOff className="eyeIcon" />
                                                                    ) : (
                                                                        <FiEye className="eyeIcon" />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="Password"
                                                    />
                                                </FormControl>
                                                <ErrorMessage name="password">
                                                    {(msg) => (
                                                        <p className="formError">
                                                            {msg}
                                                        </p>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <button
                                                type="submit"
                                                className="themeBtn w-100"
                                            >
                                                Create your account
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            ) : (
                                <Formik
                                    initialValues={{
                                        bussinessName: "",
                                        email: "",
                                        password: "",
                                        account: "bussiness",
                                        phoneNumber: "",
                                        countryCode: "+1",
                                    }}
                                    validationSchema={BussinessAccountSchema}
                                    onSubmit={(values, { setSubmitting }) => {
                                        alert(JSON.stringify(values, null, 2));
                                        setSubmitting(false);
                                    }}
                                >
                                    {(props) => (
                                        <form onSubmit={props.handleSubmit}>
                                            {authSpinner ? (
                                                <div className="formSpinner">
                                                    <div className="loading"></div>
                                                </div>
                                            ) : null}
                                            <div className="textField">
                                                <TextField
                                                    fullWidth
                                                    id="bussinessName"
                                                    name="bussinessName"
                                                    label="Legal business name"
                                                    type="text"
                                                    variant="outlined"
                                                    size="small"
                                                    className={
                                                        props.touched
                                                            .bussinessName &&
                                                        props.errors
                                                            .bussinessName
                                                            ? "error"
                                                            : ""
                                                    }
                                                    value={
                                                        props.values
                                                            .bussinessName
                                                    }
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                />
                                                <ErrorMessage name="bussinessName">
                                                    {(msg) => (
                                                        <p className="formError">
                                                            {msg}
                                                        </p>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="textField">
                                                <TextField
                                                    fullWidth
                                                    id="email"
                                                    name="email"
                                                    label="Email"
                                                    variant="outlined"
                                                    size="small"
                                                    className={
                                                        props.touched.email &&
                                                        props.errors.email
                                                            ? "error"
                                                            : ""
                                                    }
                                                    value={props.values.email}
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                />
                                                <ErrorMessage name="email">
                                                    {(msg) => (
                                                        <p className="formError">
                                                            {msg}
                                                        </p>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="textField">
                                                <FormControl
                                                    variant="outlined"
                                                    size="small"
                                                    className={
                                                        props.touched
                                                            .password &&
                                                        props.errors.password
                                                            ? "error w-100"
                                                            : "w-100"
                                                    }
                                                >
                                                    <InputLabel htmlFor="Password">
                                                        Password
                                                    </InputLabel>
                                                    <OutlinedInput
                                                        id="Password"
                                                        name="password"
                                                        type={
                                                            showPassword
                                                                ? "text"
                                                                : "password"
                                                        }
                                                        value={
                                                            props.values
                                                                .password
                                                        }
                                                        onChange={
                                                            props.handleChange
                                                        }
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={
                                                                        handleClickShowPassword
                                                                    }
                                                                    onMouseDown={
                                                                        handleMouseDownPassword
                                                                    }
                                                                    edge="end"
                                                                >
                                                                    {showPassword ? (
                                                                        <FiEyeOff className="eyeIcon" />
                                                                    ) : (
                                                                        <FiEye className="eyeIcon" />
                                                                    )}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                        label="Password"
                                                    />
                                                </FormControl>
                                                <ErrorMessage name="password">
                                                    {(msg) => (
                                                        <p className="formError">
                                                            {msg}
                                                        </p>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <div className="textField">
                                                <FormControl
                                                    variant="outlined"
                                                    size="small"
                                                    className={
                                                        props.touched
                                                            .password &&
                                                        props.errors.password
                                                            ? "error w-100 countryPhoneCode"
                                                            : "w-100 countryPhoneCode"
                                                    }
                                                >
                                                    <InputLabel htmlFor="phoneNumber">
                                                        Legal phone number
                                                    </InputLabel>
                                                    <OutlinedInput
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        type="text"
                                                        value={
                                                            props.values
                                                                .phoneNumber
                                                        }
                                                        onChange={
                                                            props.handleChange
                                                        }
                                                        endAdornment={
                                                            <InputAdornment position="start">
                                                                <div className="countryCode">
                                                                    <MuiPhoneNumber
                                                                        disabled
                                                                        className="countryCodeInput"
                                                                        defaultCountry={
                                                                            "us"
                                                                        }
                                                                        countryCodeEditable={
                                                                            false
                                                                        }
                                                                        onChange={(
                                                                            value
                                                                        ) =>
                                                                            props.setFieldValue(
                                                                                "countryCode",
                                                                                value
                                                                            )
                                                                        }
                                                                    />
                                                                </div>
                                                            </InputAdornment>
                                                        }
                                                        label="phoneNumber"
                                                    />
                                                </FormControl>
                                                <ErrorMessage name="phoneNumber">
                                                    {(msg) => (
                                                        <p className="formError">
                                                            {msg}
                                                        </p>
                                                    )}
                                                </ErrorMessage>
                                            </div>
                                            <button
                                                type="submit"
                                                className="themeBtn w-100"
                                            >
                                                Create your account
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            )}

                            <p className="agreementText">
                                By Registering, you are agree to NichoShop’s{" "}
                                <Link to={"/"} className="redirectLink">
                                    User Agreement
                                </Link>{" "}
                                and{" "}
                                <Link to={"/"} className="redirectLink">
                                    Cookies & Internet Advertising
                                </Link>
                                .
                            </p>
                            <div className="formSeperator">or</div>
                            <SocialLogin />
                        </div>
                    </div>
                </section>
                {/* Form Section End */}

                {/* message Component */}
                {/* <SuccessMessage /> */}
                {/* message Component End */}

                {/* Footer  */}
                <Footer />
                {/* Footer End  */}
            </div>
        </main>
    );
};

export default SignUp;
