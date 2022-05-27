// React
import React, { useState } from "react";
import { Link } from "react-router-dom";


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

// Compoenents
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";

import MuiPhoneNumber from "material-ui-phone-number";

import "./Profile.css";

const UpdateProfile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showReenterNewPassword, setShowReenterNewPassword] = useState(false);
    const [authSpinner, setAuthSpinner] = useState(false);
  
    const UpdateProfileSchema = yup.object({
      password: yup
        .string("Enter your password")
        .min(8, "Password should be of minimum 8 characters length")
        .required("Please make your password unique.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        newpassword: yup
            .string("Enter your new password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Please make your password unique.")
            .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        reenternewpass: yup
            .string("Please confirm your new password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Please make your password unique.")
            .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        email_suc: yup
            .string("The SUC you entered is different from the one we sent")
            .required("Suc is required"),
        phoneNumber_suc: yup
            .string("The SUC you entered is different from the one we sent")
            .required("Suc is required"),
    });
  
    const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleClickShowNewPassword = () => {
      setShowNewPassword(!showNewPassword);
    };

    const handleClickShowReenterNewPassword = () => {
      setShowReenterNewPassword(!showReenterNewPassword);
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
  
    return (
      <main>
        <div className="UpdateProfileContainer authContainer update-profile">
          <Header />
          {/* Form Section  */}
           <section className="authFormSection">
            <div className="container">
              <div className="authFormBox">
              <div className="formTitle">
                <h2>Password</h2>
              </div>               
                <p className="failedMsg">
                  <BsExclamationOctagon /> The current or new password you entered does not matched.
                </p>
                <Formik
                  initialValues={{
                    password: "",
                    newpassword: "",
                    reenternewpass: "",
                  }}
                  validationSchema={UpdateProfileSchema}
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
                        <FormControl
                          variant="outlined"
                          size="small"
                          className={
                            props.touched.password && props.errors.password
                              ? "error w-100"
                              : "w-100"
                          }
                        >
                          <InputLabel htmlFor="Password">Current Password</InputLabel>
                          <OutlinedInput
                            id="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value="1234567890"
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
                                    <span className="eyeIcon">Hide</span>
                                  ) : (
                                    <span className="eyeIcon">Show</span>
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Current Password"
                          />
                        </FormControl>
                        <ErrorMessage name="password">
                          {(msg) => <p className="formError">{msg}</p>}
                        </ErrorMessage>
                      </div>

                      <div className="textField">
                        <FormControl
                          variant="outlined"
                          size="small"
                          className={
                            props.touched.newpassword && props.errors.newpassword
                              ? "error w-100"
                              : "w-100"
                          }
                        >
                        <InputLabel htmlFor="New Password">New Password</InputLabel>
                          <OutlinedInput
                            id="newpassword"
                            name="newpassword"
                            type={showNewPassword ? "text" : "newpassword"}
                            //value={props.values.password}
                            onChange={props.handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowNewPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showNewPassword ? (
                                     <span className="eyeIcon">Hide</span>
                                     ) : (
                                       <span className="eyeIcon">Show</span>
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="New Password"
                          />
                        </FormControl>
                        <ErrorMessage name="newpassword">
                          {(msg) => <p className="formError">{msg}</p>}
                        </ErrorMessage>
                      </div>

                      <div className="textField">
                        <FormControl
                          variant="outlined"
                          size="small"
                          className={
                            props.touched.reenternewpass && props.errors.reenternewpass
                              ? "error w-100"
                              : "w-100"
                          }
                        >
                        <InputLabel htmlFor="New Password">Reenter new Password</InputLabel>
                          <OutlinedInput
                            id="reenternewpass"
                            name="reenternewpass"
                            type={showReenterNewPassword ? "text" : "reenternewpass"}
                            value={props.values.reenternewpass}
                            onChange={props.handleChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowReenterNewPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showReenterNewPassword ? (
                                     <span className="eyeIcon">Hide</span>
                                     ) : (
                                       <span className="eyeIcon">Show</span>
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="New Password"
                          />
                        </FormControl>
                        <ErrorMessage name="reenternewpass">
                          {(msg) => <p className="formError">{msg}</p>}
                        </ErrorMessage>
                      </div>

                     
                      <button type="submit" className="themeBtn w-100">
                        Save changes
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </section> 
          {/* Form Section End */}

        {/* Form Email Section  */}
        <section className="authFormSection">
          <div className="container">
            <div className="authFormBox">
            <div className="formTitle">
              <h2>Update email address</h2>
            </div>
                <p className="send-message">
                   A Single Use Code (SUC) was sent to this email address example@domain.com.
                </p>
              <Formik
                initialValues={{
                    email_suc: "",              
                }}
                validationSchema={UpdateProfileSchema}
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
                        id="email_suc"
                        name="email_suc"
                        label="SUC"
                        type="text"
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.email_suc && props.errors.email_suc
                            ? "error"
                            : ""
                        }
                        value={props.values.email_suc}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="email_suc">
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    
                  <div className="out_buttons">
				     <button className="btn btn-block btn-primary" type="submit">Confirm</button>
				     <button className="btn btn-block btn-Cancel" type="submit">Cancel</button>
				  </div>
                     
                    <div>
                        <p className="text-center">
                        <Link to={"/"} className="redirectLink">
                        Resend SUC
                        </Link>
                        </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </section> 
        {/* Form Email Section End */}

        {/* Form Phone number Section  */}
        <section className="authFormSection">
          <div className="container">
            <div className="authFormBox">
            <div className="formTitle">
              <h2>Update phone number</h2>
            </div>
                <p className="send-message">
                   A Single Use Code (SUC) was sent to this mobile number: +44 123456789.
                </p>
              <Formik
                initialValues={{
                    phoneNumber_suc: "",              
                }}
                validationSchema={UpdateProfileSchema}
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
                        id="phoneNumber_suc"
                        name="phoneNumber_suc"
                        label="SUC"
                        type="text"
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.phoneNumber_suc && props.errors.phoneNumber_suc
                            ? "error"
                            : ""
                        }
                        value={props.values.phoneNumber_suc}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="phoneNumber_suc">
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    
                  <div className="out_buttons">
				     <button className="btn btn-block btn-primary" type="submit">Confirm</button>
				     <button className="btn btn-block btn-Cancel" type="submit">Cancel</button>
				  </div>
                     
                    <div>
                        <p className="text-center">
                        <Link to={"/"} className="redirectLink">
                         Resend SUC
                        </Link>
                        </p>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </section>
        {/* Form Phone number Section End */}

  
          
          {/* Footer  */}
          <Footer />
          {/* Footer End  */}
        </div>
      </main>
    );
  };
  
  export default UpdateProfile;