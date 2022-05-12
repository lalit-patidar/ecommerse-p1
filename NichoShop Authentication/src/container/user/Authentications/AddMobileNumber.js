// React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 3rd party components
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";

// Compoenents
import Header from "../../../components/AuthComponents/Header";
import Footer from "../../../components/AuthComponents/Footer";

// Styles
import "../../../assets/styles/auth.css";
import MuiPhoneNumber from "material-ui-phone-number";

const AddMobileNumber = () => {
  const [authSpinner, setAuthSpinner] = useState(false);

  const AddNumberSchema = yup.object({
    phoneNumber: yup
      .string("Enter your Phone Number")
      .required("Phone Number Required"),
  });

  const SUCSchema = yup.object({
    suc: yup
      .string("Enter your SUC")
      .required("The code you entered is different from the one we texted."),
  });

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
                <h2>Add mobile number</h2>
              </div>
              {/* <Formik
                initialValues={{
                  phoneNumber: "",
                  countryCode: "+1",
                }}
                validationSchema={AddNumberSchema}
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
                      <p>
                        Add a mobile phone number for a higher level of
                        protection to your NichoShop account. Make sure your
                        mobile number is up to date because it is an important
                        part of your account security.
                      </p>
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
                          Legal phone number
                        </InputLabel>
                        <OutlinedInput
                          id="phoneNumber"
                          name="phoneNumber"
                          type="text"
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
                      Add mobile number
                    </button>
                  </form>
                )}
              </Formik> */}

              <Formik
                initialValues={{
                  suc: "",
                }}
                validationSchema={SUCSchema}
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
                    <p className="mt-0">
                      A text with a Single-Use Code (SUC) has been sent to your
                      mobile phone number:
                      <br />
                      <span className="text-bold">+44 1234567890</span>
                    </p>
                    <button type="button" className="noBgThemeBtn mb-3 text-bold">
                      Change
                    </button>
                    <div className="textField">
                      <TextField
                        fullWidth
                        id="suc"
                        name="suc"
                        label="Enter SUC"
                        type="text"
                        variant="outlined"
                        size="small"
                        className={
                          props.touched.suc && props.errors.suc ? "error" : ""
                        }
                        value={props.values.suc}
                        onChange={props.handleChange}
                      />
                      <ErrorMessage name="suc">
                        {(msg) => <p className="formError">{msg}</p>}
                      </ErrorMessage>
                    </div>
                    <button type="submit" className="themeBtn w-100">
                      Verify
                    </button>
                  </form>
                )}
              </Formik>

              <p className="agreementText text-center">
                <button type="button" className="noBgThemeBtn">
                  Resend SUC
                </button>
              </p>
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

export default AddMobileNumber;
