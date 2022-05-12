// React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 3rd party components
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { BsExclamationOctagon } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Recaptcha from "react-recaptcha";

// Compoenents
import Header from "../../../components/AuthComponents/Header";
import Footer from "../../../components/AuthComponents/Footer";
import SocialLogin from "../../../components/AuthComponents/SocialLogin";

// Styles
import "../../../assets/styles/auth.css";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authSpinner, setAuthSpinner] = useState(false);

  const signInSchema = yup.object({
    emailorname: yup
      .string("Enter your username or email")
      .required("Username or email required"),
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

  const recaptchaLoaded = () => {
    console.log("capcha successfully loaded");
  };

  const verifyCallback = () => {
    console.log("capcha successfully loaded");
  };

  return (
    <main>
      <div className="signInContainer authContainer">
        {/* Header  */}
        <Header>
          <Link to="/auth/signup" className="redirectLink ms-1">
            Create an account
          </Link>
        </Header>
        {/* Header End  */}

        {/* Form Section  */}
        {/* <section className="authFormSection">
          <div className="container">
            <div className="authFormBox">
            <div className="formTitle">
              <h2>Sign in</h2>
            </div>
              <p className="successMsg">
                <FaRegCheckCircle /> You’re ready to sign in with your new
                password.
              </p>
              <p className="failedMsg">
                <BsExclamationOctagon /> Your email/user ID or password is
                incorrect.
              </p>
              <Formik
                initialValues={{
                  emailorname: "",
                  password: "",
                }}
                validationSchema={signInSchema}
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
                        id="emailorname"
                        name="emailorname"
                        label="Emai or username"
                        type="text"
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.emailorname && props.errors.emailorname
                            ? "error"
                            : ""
                        }
                        value={props.values.emailorname}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="emailorname">
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    <div className="textField">
                      <FormControl
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.password && props.errors.password
                            ? "error w-100"
                            : "w-100"
                        }
                      >
                        <InputLabel htmlFor="Password">Password</InputLabel>
                        <OutlinedInput
                          id="Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={props.values.password}
                          onChange={props.handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    <div className="recaptchaBox">
                      <Recaptcha
                        sitekey="6LdPnuIfAAAAAPH5b8jfpQV_r-ciU2Q7BAeKndzw"
                        render="explicit"
                        onloadCallback={recaptchaLoaded}
                        verifyCallback={verifyCallback}
                      />
                    </div>
                    <button type="submit" className="themeBtn w-100">
                      Sign in
                    </button>
                  </form>
                )}
              </Formik>
              <div className="formFooterLinks">
                <div>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Stay signed in"
                  />
                </div>
                <div>
                  <p className="agreementText">
                    <Link to={"/"} className="redirectLink">
                      Text a temporary password
                    </Link>
                  </p>
                  <p className="agreementText">
                    <Link to={"/"} className="redirectLink">
                      Forgot your password?
                    </Link>
                  </p>
                </div>
              </div>
              <div className="formSeperator">or</div>
              <SocialLogin />
            </div>
          </div>
        </section> */}
        {/* Form Section End */}

        {/* Form Section only password  */}
        <section className="authFormSection">
          <div className="container">
            <div className="authFormBox">
              <div className="formTitle switchAcoount">
                <h2>Welcome</h2>
                <p>email@domain.com</p>
                <p>Not you? Switch account</p>
                <p>Please sign in again to make changes to your account.</p>
              </div>
              <p className="failedMsg">
                <BsExclamationOctagon /> Your email/user ID or password is
                incorrect.
              </p>
              <Formik
                initialValues={{
                  emailorname: "",
                  password: "",
                }}
                validationSchema={signInSchema}
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
                    <div className="textField d-none">
                      <TextField
                        fullWidth
                        id="emailorname"
                        name="emailorname"
                        label="Emai or username"
                        type="text"
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.emailorname && props.errors.emailorname
                            ? "error"
                            : ""
                        }
                        value={props.values.emailorname}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="emailorname">
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    <div className="textField">
                      <FormControl
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.password && props.errors.password
                            ? "error w-100"
                            : "w-100"
                        }
                      >
                        <InputLabel htmlFor="Password">Password</InputLabel>
                        <OutlinedInput
                          id="Password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          value={props.values.password}
                          onChange={props.handleChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
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
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    <div className="recaptchaBox">
                      <Recaptcha
                        sitekey="6LdPnuIfAAAAAPH5b8jfpQV_r-ciU2Q7BAeKndzw"
                        render="explicit"
                        onloadCallback={recaptchaLoaded}
                        verifyCallback={verifyCallback}
                      />
                    </div>
                    <button type="submit" className="themeBtn w-100">
                      Sign in
                    </button>
                  </form>
                )}
              </Formik>
              <div className="formFooterLinks">
                <div>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Stay signed in"
                  />
                </div>
                <div>
                  <p className="agreementText">
                    <Link to={"/"} className="redirectLink">
                      Text a temporary password
                    </Link>
                  </p>
                  <p className="agreementText">
                    <Link to={"/"} className="redirectLink">
                      Forgot your password?
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Form Section only password End */}

        {/* Footer  */}
        <Footer />
        {/* Footer End  */}
      </div>
    </main>
  );
};

export default SignIn;
