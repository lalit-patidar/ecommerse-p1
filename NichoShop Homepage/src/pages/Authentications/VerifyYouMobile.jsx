import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../assets/logo/logo.svg";
import FormFooter from "../../components/FormFooter/FormFooter";
import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";

import "react-phone-number-input/style.css";

const VerifyYouMobile = () => {
    const [getSocCode, setSocCode] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    const soccodeHandler = (e) => {
        setSocCode(e.target.value);
    };

    // form data submit
    const formHandler = (e) => {
        e.preventDefault();
        setFormSubmit(true);
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
                                <h4>Verify that it’s you</h4>
                                <p className="text-start ui-add-mob-info mb-3">
                                    We’re texting a Single-Use Code (SUC) to
                                    this mobile number: XXX XXXX1234
                                </p>

                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter SUC"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={soccodeHandler}
                                            value={getSocCode}
                                            error={
                                                getFormSubmit &&
                                                getSocCode.length < 1 &&
                                                true
                                            }
                                        />
                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getSocCode.length < 1 && (
                                                    <>
                                                        That’s not a match. Try
                                                        again or let us{" "}
                                                        <a href="#">
                                                            Resend the SUC
                                                        </a>
                                                    </>
                                                )}
                                        </span>
                                    </Form.Group>
                                    <div className="ui-vy-button">
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            fullWidth
                                        >
                                            Sign in
                                        </Button>
                                        <Button variant="outlined" fullWidth>
                                            Cancel
                                        </Button>
                                    </div>
                                    <p className="ui-vy-footer-link">
                                        Still no code?{" "}
                                        <Link to="/">Resend SUC</Link>
                                    </p>
                                    <p className="ui-vpm-footer">
                                        Mobile charges may apply
                                    </p>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FormFooter />
        </>
    );
};

export default VerifyYouMobile;
