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
// import Recaptcha from "react-recaptcha";
import ReCAPTCHANEW from "react-google-recaptcha";


// Compoenents
import Header from "../../components/auth_admin/Header";
import Footer from "../../components/auth_admin/Footer";

// Styles
import "./auth_admin.css";


const AdminTempPass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [authSpinner, setAuthSpinner] = useState(false);
    const[setCaptcha, setCaptchaVal] = useState(false);
    const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    const DELAY = 1500;

  const AdminTempPassSchema = yup.object({
    id: yup
      .string("Enter your ID")
      .required("ID is required"),
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

  const handleRecaptchaChange = value => {
    console.log("Captcha value:", value);
    setCaptchaVal(!value);
    // if value is null recaptcha expired
    // if (value === null) this.setState({ expired: "true" });
  };

  const asyncScriptOnLoad = () => {
    // this.setState({ callback: "called!" });
    console.log("temp password scriptLoad - reCaptcha Ref-", React.createRef());
  };

  const verifyCallback = () => {
    console.log("capcha successfully loaded");
  };

  return (
    <main>
      <div className="AdminSignInContainer authContainer adn-screen">

        {/* Header  */}
        <Header />
        {/* Header End  */}

        {/* Form Section  */}
         <section className="authFormSection">
          <div className="container">
            <div className="authFormBox">
            <div className="formTitle">
              <h2>Sign in</h2>
            </div>
              <p className="failedMsg">
                <BsExclamationOctagon /> Your ID or password is
                incorrect.
              </p>
              <Formik
                initialValues={{
                    id: "",
                  password: "",
                }}
                validationSchema={AdminTempPassSchema}
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
                        id="id"
                        name="id"
                        label="ID"
                        type="text"
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.id && props.errors.id
                            ? "error"
                            : ""
                        }
                        value={props.values.id}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="id">
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
                        <InputLabel htmlFor="Password">TEMPORARY PASSWORD</InputLabel>
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
                    <ReCAPTCHANEW
                        style={{ display: "inline-block" }}
                        theme="light"
                        ref={React.createRef()}
                        sitekey={TEST_SITE_KEY}
                        onChange={handleRecaptchaChange}
                        asyncScriptOnLoad={asyncScriptOnLoad}
                    />
                    </div>
                    <button type="submit" className="themeBtn w-100">
                      Login
                    </button>
                  </form>
                )}
              </Formik>
              <div className="formFooterLinks">
                <div>
                  <p className="agreementText">
                    <Link to={"/admin/temp-password"} className="redirectLink">
                        Text a temporary password
                    </Link>
                  </p>
                </div>        
              </div>             
            </div>
          </div>
        </section> 
        {/* Form Section End */}
     
        {/* Footer  */}
        <Footer />
        {/* Footer End  */}
      </div>
    </main>
  );
};

export default AdminTempPass;
