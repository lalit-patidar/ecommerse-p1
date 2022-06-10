import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MENU from '../../components/menu/Menu';
import Footer from '../../components/MyNichoShop/footer/Footer';
import './Address.css';
import { useState } from 'react';

const Address_Shipping_View = () => {
    const [addButtonState, SetAddAddressState] = useState(false);
    const AddNewAddress_display = () => {
        SetAddAddressState(true);
    }
    const AddNewAddress_close = () => {
        SetAddAddressState(false);
    }
    return (
        <React.Fragment>
            <MENU />
            <div className='container-fluid'>
                <div className='row mt-3 mx-3'>
                    <nav aria-label="breadcrumb ">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">My NichoShop</Link></li>
                            <li className="breadcrumb-item">Addresses</li>
                        </ol>
                    </nav>
                    <div className='row my-1 m-auto mb-5'>
                        <h3 className='mb-3'>Addresses</h3>
                        <table className='table table-bordered ' style={{ 'fontSize': '90%' }}>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='row p-4'>
                                            <div className='col-lg-5 col-md-4'>
                                                <h5>Primary shipping address:</h5>
                                                <small>Here I would like receive items I purchase.</small>
                                            </div>
                                            <div className='col-lg-5 col-md-5'>
                                                <h5>Name Family</h5>
                                                <p>1234 EL CAMINO REAL</p>
                                                <p>STE - 100386</p>
                                                <p>SUNNYVALE CA 98765-4321</p>
                                                <p>United States</p>
                                                <p>Phone : +1234-5678-900</p>
                                            </div>
                                            <div className='col-lg-2 col-md-3'>
                                                <div className='d-grid'>
                                                    <button className='btn btn-primary btn-block mb-2' >Edit</button>
                                                    <button className='btn btn-outline-primary btn-block'>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='row p-4'>
                                            <div className='col-lg-5 col-md-4'>

                                            </div>
                                            <div className='col-lg-5 col-md-5'>
                                                <h5>Name Family</h5>
                                                <p>1234 EL CAMINO REAL</p>
                                                <p>STE - 100386</p>
                                                <p>SUNNYVALE CA 98765-4321</p>
                                                <p>United States</p>
                                                <p>Phone : +1234-5678-900</p>
                                            </div>
                                            <div className='col-lg-2 col-md-3'>
                                                <div className='d-grid'>
                                                    <button className='btn btn-primary btn-block mb-2' >Make it primary</button>
                                                    <button className='btn btn-primary btn-block mb-2' >Edit</button>
                                                    <button className='btn btn-outline-primary btn-block'>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='row p-4'>
                                            <div className='col-lg-5 col-md-4'>

                                            </div>
                                            <div className='col-lg-5 col-md-5'>
                                                <h5>Name Family</h5>
                                                <p>1234 EL CAMINO REAL</p>
                                                <p>STE - 100386</p>
                                                <p>SUNNYVALE CA 98765-4321</p>
                                                <p>United States</p>
                                                <p>Phone : +1234-5678-900</p>
                                            </div>
                                            <div className='col-lg-2 col-md-3'>
                                                <div className='d-grid'>
                                                    <button className='btn btn-primary btn-block mb-2' >Make it primary</button>
                                                    <button className='btn btn-primary btn-block mb-2' >Edit</button>
                                                    <button className='btn btn-outline-primary btn-block'>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row m-3' >
                                            {
                                                addButtonState == false ?
                                                    <button onClick={AddNewAddress_display} className='btn btn-primary col-lg-2 col-md-4 col-sm-6' data-bs-toggle="collapse" data-bs-target="#demo">
                                                        Add new address
                                                    </button> : ''

                                            }
                                            <div id="demo" className="collapse">

                                                <form className='add_address col-lg-4 col-md-6 col-sm-12'>
                                                    <h4 className='mb-4'>Add new address</h4>
                                                    <div className="form-group has-float-label">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <label htmlFor="fullname">Country</label>
                                                    </div>
                                                    <div className="form-group has-float-label">
                                                        <input className="form-control" type="text" placeholder="Full Name" aria-label="default input example" />
                                                        <label htmlFor="fullname">Full Name</label>
                                                    </div>

                                                    <div className="form-group has-float-label">
                                                        <input className="form-control" type="text" placeholder="Street Address" aria-label="default input example" />
                                                        <label htmlFor="fullname">Street Address</label>
                                                    </div>
                                                    <div className="form-group has-float-label">
                                                        <input className="form-control" type="text" placeholder="" aria-label="default input example" />
                                                        <label htmlFor="fullname"></label>
                                                    </div>
                                                    <div className="form-group has-float-label">
                                                        <input className="form-control" type="text" placeholder="Town/City" aria-label="default input example" />
                                                        <label htmlFor="fullname">Town/City</label>
                                                    </div>
                                                    <div className="form-group has-float-label">
                                                        <select className="form-select" aria-label="Default select example">
                                                            <option ></option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                        <label htmlFor="fullname">Country</label>
                                                    </div>

                                                    <div className="form-group has-float-label">
                                                        <input className="form-control" type="text" placeholder="PostCode" aria-label="default input example" />
                                                        <label htmlFor="fullname">PostCode</label>
                                                    </div>

                                                    <div className="row phone">
                                                        <div className='col-4' style={{ 'paddingRight': '0px' }}>
                                                            <select className=" form-select" aria-label="Default select example">
                                                                <option >sa</option>
                                                                <option value="1">One</option>
                                                                <option value="2">Two</option>
                                                                <option value="3">Three</option>
                                                            </select>
                                                        </div>
                                                        <div className='col-6' style={{ 'paddingLeft': '0px' }}>
                                                            <input type="text" className="form-control" placeholder="Your Email" />
                                                        </div>
                                                        <div className='col-2'>

                                                        </div>

                                                    </div>
                                                    <div >
                                                        <input style={{ 'marginRight': '10px' }} type="checkbox" id="check1" name="option1" value="something" />
                                                        <label className="form-check-label">Make this my default shipping address</label>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-lg-6 d-gird' style={{ 'paddingRight': '5px' }}>
                                                            <button className='btn btn-primary btn-black' style={{ 'width': '100%' }}>Add new address</button>
                                                        </div>
                                                        <div className='col-lg-6' style={{ 'paddingLeft': '5px' }}>
                                                            <button type='button' className='btn btn-outline-primary btn-black' onClick={AddNewAddress_close} data-bs-toggle="collapse" data-bs-target="#demo" style={{ 'width': '100%' }}>Cancel</button>
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Address_Shipping_View;