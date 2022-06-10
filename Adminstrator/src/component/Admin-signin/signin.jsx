import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signin, temporary } from '../../Redux/actions/auth';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../container/Footer/footer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ReCAPTCHA from "react-google-recaptcha";

import './css/signin.css';
const SignIn = () => {
    const navigate = useNavigate();
    let [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [reCAPTCHA, setRecaptcha] = useState('');
    const [alerterror, setAlert] = useState(false);
    let { message, temporaryMessage } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const inputValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'id':
                setId(value);
                setAlert(false);
                break;
            case 'password':
                setPassword(value);
                setAlert(false);
                break;
            default:
                break;
        }
    }
    function onChange(value) {
        setRecaptcha(value);
        console.log(value);
    }

    const submitValue = () => {
        if (id.length == 0 || password.length == 0) {
            setAlert(true);
        } else {
            dispatch(signin(id, password, reCAPTCHA));
            if (message == "OK") {
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className='custom-ui text-center alert_window px-5 py-4'>
                                <h3></h3>
                                <p>Successfully login. next time, plz do the duo push</p>
                                <button className="btn btn-sm btn-primary mx-2 px-3"
                                    onClick={() => {
                                        onClose();
                                    }}
                                >
                                    <a href={message} target='_blank' className='text-white'>OK</a>
                                </button>
                            </div>
                        );
                    }
                });
            }
            if (message == "NO") {
                confirmAlert({
                    customUI: ({ onClose }) => {
                        return (
                            <div className='custom-ui text-center alert_window px-5 py-4'>
                                <h3></h3>
                                <p>Your ID and Password is wrong.</p>
                                <button className="btn btn-sm btn-primary mx-2 px-3"
                                    onClick={() => {
                                        onClose();
                                    }}
                                >
                                    <a href={message} target='_blank' className='text-white'>OK</a>
                                </button>
                            </div>
                        );
                    }
                });
            }
            
        }
    }

    const temporary_request = () => {
        dispatch(temporary('Nur1@gmail.com'));
        if (temporaryMessage == 'OK') {
            navigate('/temporary');
            console.log(temporaryMessage)
        }
        if (temporaryMessage == undefined) {
            confirmAlert({
                customUI: ({ onClose }) => {
                    return (
                        <div className='custom-ui text-center alert_window px-5 py-4'>
                            <h3></h3>
                            <p>Your action is failed</p>
                            <button className="btn btn-sm btn-primary mx-2 px-3"
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                <a href={message} target='_blank' className='text-white'>OK</a>
                            </button>
                        </div>
                    );
                }
            });
        }
    }

    return (
        <React.Fragment>
            <div className='container'>
                <div className='row  my-4'>
                    <img src="assets/img/NS Logo.svg" alt="" className='m-auto' style={{ 'width': '200px' }} />
                </div>
                <div className='row col-lg-4 col-md-6 col-sm-10 offset-lg-4 offset-md-3 offset-sm-1'>
                    <div className='form-layout-signinpage px-4 py-1'>
                        <form>
                            <h5 className='text-center my-3'><b>Sign in</b></h5>
                            <hr />
                            {
                                alerterror === true ? <span className='color-red'><img src='assets/img/alert-circle.svg' /> Your email/user ID or password is incorrect.</span> : ''
                            }
                            <div>
                                <div className="form-group has-float-label">
                                    <input type="text" className="form-control mt-3" name='id' onChange={inputValue} id="id" placeholder="ID" />
                                    <label htmlFor="fullname">ID</label>
                                </div>
                            </div>

                            <div className="form-group has-float-label">
                                <input type="password" className="form-control mt-3" name='password' onChange={inputValue} id="password" placeholder="Password" />
                                <label htmlFor="fullname">Password</label>
                            </div>

                            <ReCAPTCHA className='mt-3'
                                sitekey="6LeO0lQgAAAAAEfqqZyV1RwKQdvbgnVhh0BrqbF7"
                                onChange={onChange}
                            />

                            <button type='button' onClick={submitValue} className='button-signinpage my-3 btn btn-primary'>
                                Sign in
                            </button>
                            <div className='row align-right'>
                                <span onClick={temporary_request} className='text-primary mb-3 text-signinpage' >Text a temporary password</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default SignIn;