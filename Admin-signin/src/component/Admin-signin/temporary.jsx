import React, { useState } from 'react';
import './css/signin.css';
const Temporary = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [alerterror, setAlert] = useState(false);
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

    const submitValue = () => {
        if (id.length == 0 || password.length == 0) {
            setAlert(true);
        }
    }
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row text-center my-4'>
                    <h2><span className='color-title1'>Nicho</span>&nbsp;<span className='color-title2'>Shop</span></h2>
                </div>
                <div className='row col-lg-4 col-md-6 col-sm-10 offset-lg-4 offset-md-3 offset-sm-1'>
                    <div className='form-layout-signinpage px-4 py-1'>
                        <form>
                            <h5 className='text-center my-3'><b>Sign in</b></h5>
                            <hr />
                            {
                                alerterror === true ? <span className='color-red'><b className='error-icon'>!</b> Your email/user ID or password is incorrect.</span> : ''
                            }
                            <div>
                                <input type="text" autoComplete='false' name='id' placeholder='ID' onChange={inputValue} className='form-control mt-3 ' />
                            </div>
                            <div>
                                <input type="password" name='password' placeholder='Teporary Password' onChange={inputValue} className='form-control mt-3' />
                            </div>
                            <div className='check-signinpage mt-3'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <input className="form-check-input p-2 m-2 col-lg-3" type="checkbox" name="check" />
                                        <img src='assets/signin/recaptcha.png' width='80px' alt='recaptcha' className='recaptcha' />
                                    </div>
                                </div>
                            </div>
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
            <div className='footer-signinpage'>
                <div className='row'>
                    <div className='text-center'>
                        <span>Copyright 2022 nichoShop nichoShop. All Rights User Agreement, privich</span>
                    </div>
                    <div className=''>
                        <img src='assets/signin/norton.png' alt='norton' width='30px' className='nortonlogo' />
                    </div>
                </div>
           </div>
        </React.Fragment>
    )
}
export default Temporary;