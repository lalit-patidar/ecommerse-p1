import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../container/Footer/footer';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './css/signin.css';
import ReCAPTCHA from "react-google-recaptcha";
const Temporary = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [alerterror, setAlert] = useState(false);
    const [reCAPTCHA, setRecaptcha] = useState('');
    let { message } = useSelector(state => state.message);
    const dispatch = useDispatch();
    const inputValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'id':
                setId(value);
                setAlert(false)
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
        setRecaptcha(value)
    }
    const submitValue = () => {
        if (id.length == 0 || password.length == 0) {
            setAlert(true);
        }else {
            
        }
    }
    if (message !== undefined) {
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
                                <input type="password" className="form-control mt-3" name='password' onChange={inputValue} id="password" placeholder="Temporary Password" />
                                <label htmlFor="fullname">Temporary Password</label>
                            </div>
                            <ReCAPTCHA className='mt-3'
                                sitekey="6LeO0lQgAAAAAEfqqZyV1RwKQdvbgnVhh0BrqbF7"
                                onChange={onChange}
                            />
                            <button type='button' onClick={submitValue} className='button-signinpage my-3 btn btn-primary'>
                                Sign in
                            </button>
                            <div className='row align-right'>
                                <p className='text-primary text-signinpage' >Text a temporary password</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Temporary;