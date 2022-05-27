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

const Profile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showReenterNewPassword, setShowReenterNewPassword] = useState(false);
    const [authSpinner, setAuthSpinner] = useState(false);
  
    const ProfileSchema = yup.object({
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
      email: yup
        .string("Enter your email")
        .required("Email is required"),
        phoneNumber: yup
        .string("Enter your Phone Number")
        .required("Phone Number Required"),
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
        <div className="ProfileContainer authContainer update-profile">
          <Header />
          {/* Form Section  */}
           <section className="authFormSection">
            <div className="container">
              <div className="authFormBox">
              <div className="formTitle">
                <h2>Password</h2>
              </div>
                <p className="successMsg">
                  <FaRegCheckCircle /> Password was changed.
                </p>            
                <Formik
                  initialValues={{
                    password: "",
                    newpassword: "",
                    reenternewpass: "",
                  }}
                  validationSchema={ProfileSchema}
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
              <h2>Email address</h2>
            </div>
                <p className="successMsg">
                  <FaRegCheckCircle /> Email address was changed.
                </p> 
              <Formik
                initialValues={{
                  email: "",              
                }}
                validationSchema={ProfileSchema}
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
                        id="email"
                        name="email"
                        label="Email"
                        type="text"
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.email && props.errors.email
                            ? "error"
                            : ""
                        }
                        value={props.values.email}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="email">
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    
                    <button type="submit" className="themeBtn w-100">
                      Update
                    </button>
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
                <h2>Phone number</h2>
              </div>
              <p className="successMsg">
                  <FaRegCheckCircle /> Phone number was changed.
                </p> 
            <Formik
                initialValues={{
                  phoneNumber: "",
                  countryCode: "+1",
                }}
                validationSchema={ProfileSchema}
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
                            ? "error w-100 countryPhoneCode"
                            : "w-100 countryPhoneCode"
                        }
                      >
                        <InputLabel htmlFor="phoneNumber">
                        Mobile phone number
                        </InputLabel>
                        <OutlinedInput
                          id="phoneNumber"
                          name="phoneNumber"
                          type="text"
                          label = "Mobile phone number"
                          value={props.values.phoneNumber}
                          onChange={props.handleChange}
                          endAdornment={
                            <InputAdornment position="start">
                              <div className="countryCode">
                                <MuiPhoneNumber
                                  disabled
                                  className="countryCodeInput"
                                  defaultCountry={"us"}
                                  countryCodeEditable={false}
                                  onChange={(value) =>
                                    props.setFieldValue("countryCode", value)
                                  }
                                />
                              </div>
                            </InputAdornment>
                          }
                          label="phoneNumber"
                        />
                      </FormControl>
                      <ErrorMessage name="phoneNumber">
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    <button type="submit" className="themeBtn w-100">
                      Update
                    </button>
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
  
  export default Profile;