import React, { useState } from 'react';
import Nav from '../../container/Nav/navbar';
import './css/category.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Footer from '../../container/Footer/footer';

const Category = () => {
    let initialState = [
        {
            categoryName: 'electronic',
        },
        {
            categoryName: 'sda',
        },
        {
            categoryName: 'des',
        }
    ]
    const [category, setInitialdata] = useState(initialState);
    const [toggleAccordionButton, setToggleAccordionButtonState] = useState(null);
    const [CategoryValue, setAddCategoryValue] = useState('');
    const toggle = (index) => {
        setToggleAccordionButtonState(index);
    }
    const addCategoryValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'addCategory':
                setAddCategoryValue(value);
                console.log(CategoryValue)
                break;
            default:
                break;
        }
    }
    const AddCategory = () => {
        console.log(...category);
        setInitialdata(...category, { categoryName: CategoryValue });
    }
    const edit = () => {
        
    }
    const rename = () => {

    }
    const categorydelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui text-center alert_window px-5 py-4'>
                        <h3>Confrim your delete</h3>
                        <p>Are you sure you want to delete Fashion?</p>
                        <button type="button" onClick={onClose} className="btn mx-2 px-3 btn-sm btn-outline-dark">Cancel</button>
                        <button className="btn btn-sm btn-primary mx-2 px-3"
                            onClick={() => {

                                onClose();
                                successfulDelete();

                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            }
        });
    }
    const successfulDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui text-center alert_window px-5 py-5'>
                        <h5>Fashion was successfully deleted</h5>
                        <i className="fa fa-check text-success" style={{ 'fontSize': '30px' }}></i>
                    </div>
                );
            }
        });
    }
    return (
        <React.Fragment>
            <Nav />
            <div className='container-fluid'>
                <div className='row mt-3 text-center'>
                    <h3>Categories</h3>
                </div>
                <div className='row col-lg-10 offset-lg-1 col-md-12 col-sm-12'>
                    <div className="accordion categorys" id="accordionExample">
                        {category.map((category, index) => {
                            const list = (
                                <div key={index} className="accordion-item my-3 " >
                                    <h2 className="accordion-header" id={index} >
                                        <div className="dropdown pull-right">
                                            <div>
                                                <img src='assets/img/plus-circle (1).svg' className='category-dropdown' data-bs-toggle="dropdown" />
                                                <ul className="dropdown-menu">
                                                    <li data-bs-toggle="modal" data-bs-target="#myModal">
                                                        <a className="dropdown-item" href="#" onClick={rename}>
                                                            <img src='assets/img/edit-2.svg' />
                                                            &nbsp;Rename
                                                        </a>
                                                    </li>
                                                    <li data-bs-toggle="modal" data-bs-target="#myModal1">
                                                        <a className="dropdown-item" href="#" onClick={edit}>
                                                            <img src='assets/img/arrow-right.svg' />
                                                            &nbsp;Edit
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#" onClick={categorydelete}>
                                                            <img src='assets/img/trash.svg' />
                                                            &nbsp;Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {
                                            toggleAccordionButton !== index ?

                                                <button className="accordion-button collapsed text-white p--20" onClick={() => toggle(index)} type="button" data-bs-toggle="collapse" data-bs-target={'#' + category.categoryName} aria-expanded="false" aria-controls={category.categoryName}>
                                                    <img src='assets/img/plus-circle.png' />&nbsp;<b style={{ 'color': 'black' }}>{category.categoryName}</b>
                                                </button> :
                                                <button className="accordion-button collapsed text-white p--20" onClick={() => toggle(null)} type="button" data-bs-toggle="collapse" data-bs-target={'#' + category.categoryName} aria-expanded="false" aria-controls={category.categoryName}>
                                                    <img src='assets/img/minus.png' style={{'borderRadius' : '50%'}}/>&nbsp;<b style={{ 'color': 'black' }}>{category.categoryName}</b>
                                                </button>
                                        }
                                    </h2>
                                    <div id={category.categoryName} className="accordion-collapse collapse" aria-labelledby={index} data-bs-parent="#accordionExample">
                                        <div className="accordion-body row p-4">
                                            <div className='col-lg-5 mb-4'>
                                                <div className='row'>
                                                    <div className='row'>
                                                        <div className='col-10'>
                                                            <span><i className='fa fa-minus'></i> &nbsp;<b>Audio system</b></span>
                                                        </div>
                                                        <div className='col-2'>
                                                            <i className='fa fa-bars'></i>
                                                        </div>
                                                    </div>
                                                    <div className='ml-1 row'>
                                                        <div className='col-1'>
                                                        </div>
                                                        <div className='col-9'>
                                                            <span><i className='fa fa-minus'></i> &nbsp;Laptops</span>
                                                        </div>
                                                        <div className='col-2'>
                                                            <i className='fa fa-bars'></i>
                                                        </div>
                                                    </div>
                                                    <div className='ml-1 row'>
                                                        <div className='col-2'>
                                                        </div>
                                                        <div className='col-8'>
                                                            <span><i className='fa fa-minus'></i> &nbsp;Laptops</span>
                                                        </div>
                                                        <div className='col-2'>
                                                            <i className='fa fa-bars'></i>
                                                        </div>
                                                    </div>
                                                    <div className='ml-1 row'>
                                                        <div className='col-3'>
                                                        </div>
                                                        <div className='col-7'>
                                                            <span>LaptopsLaptops</span>
                                                        </div>
                                                        <div className='col-2'>
                                                            <i className='fa fa-bars'></i>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-10'>
                                                            <span><i className='fa fa-plus'></i> &nbsp;<b>Headphone</b></span>
                                                        </div>
                                                        <div className='col-2'>
                                                            <i className='fa fa-bars'></i>
                                                        </div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-10'>
                                                            <span><i className='fa fa-plus'></i> &nbsp;<b>Cell phones</b></span>
                                                        </div>
                                                        <div className='col-2'>
                                                            <i className='fa fa-bars'></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-3'>
                                                    <div className='btn-group'>
                                                        <div className='col-lg-8 col-sm-8 col-sm-8'>
                                                            <input type='text' name='addCategory' placeholder='Add a sub-category' onChange={addCategoryValue} className='form-control' />
                                                        </div>
                                                        <div className='col-4 mx-1'>
                                                            <button className='btn btn-outline-success' onClick={AddCategory}> <i className='fa fa-plus'></i>&nbsp;Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-7'>
                                                <div className='row'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>
                                                                <label htmlFor='Condition' >Condition</label>
                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>Choose a condition</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>

                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>
                                                                <label htmlFor='Condition mt-1'>Specfics</label>
                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>Version</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row col-lg-2'>
                                                        <div className='col-6'>
                                                            <div className='active_grey mt-1'></div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>

                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>Sreen Size</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-2 row'>
                                                        <div className='col-6'>
                                                            <div className='active_grey mt-1' style={{ 'display': 'none' }}></div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className="form-check-input p-2" type="checkbox"  value="" id="flexCheckDefault" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>

                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>OS</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row col-lg-2'>
                                                        <div className='col-6'>
                                                            <div className='active_grey mt-1'></div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>

                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>Processor</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>

                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>

                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>Battery</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row col-lg-2'>
                                                        <div className='col-6'>
                                                            <div className='active_grey mt-1'></div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className="form-check-input p-2" type="checkbox"  value="" id="flexCheckDefault" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>

                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>Memory</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row col-lg-2'>
                                                        <div className='col-6'>
                                                            <div className='active_red mt-1'></div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>

                                                            </div>
                                                            <div className='col-9'>
                                                                <select className='form-control'>
                                                                    <option>HDD</option>
                                                                    <option></option>
                                                                    <option></option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row col-lg-2'>
                                                        <div className='col-6'>
                                                            <div className='active_grey mt-1'></div>
                                                        </div>
                                                        <div className='col-6'>
                                                            <input className="form-check-input p-2" type="checkbox" value="" id="flexCheckDefault" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row mt-2'>
                                                    <div className='col-lg-6'>
                                                        <div className='row'>
                                                            <div className='col-3'>

                                                            </div>
                                                            <div className='col-9'>
                                                                <input type='text' className='form-control' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6'>
                                                        <button className='btn btn-outline-success'>
                                                            <i className='fa fa-plus'>&nbsp;Add</i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                            return list;
                        })}
                    </div>
                </div>
                <div className='row col-lg-10 offset-lg-1'>
                    <div className='btn-group col-lg-6'>
                        <div className='col-lg-8 col-sm-8 col-sm-8'>
                            <input type='text' name='addCategory' placeholder='Add a sub-category' onChange={addCategoryValue} className='form-control' />
                        </div>
                        <div className='col-4 mx-1'>
                            <button className='btn btn-outline-success' onClick={AddCategory}> <i className='fa fa-plus'></i>&nbsp;Add</button>
                        </div>
                    </div>

                </div>

            </div>
            <div className="modal mt-5" id="myModal">
                <div className="modal-dialog mt-5">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h5 className="modal-title">Rename</h5>
                        </div>
                        <div className="modal-body">
                            <input type="text" className='form-control' />
                        </div>

                        <div className="modal-body">
                            <span className="modal-title mb-1">Rename to:</span>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal mt-5" id="myModal1">
                <div className="modal-dialog mt-5">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h5 className="modal-title">Move IPod and MP3</h5>
                        </div>
                        <div className="modal-body">
                            <input type="text" className='form-control' />
                        </div>

                        <div className="modal-body">
                            <span className="modal-title mb-1">Rename to:</span>
                            <input type="text" className='form-control' />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Confirm</button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}
export default Category;