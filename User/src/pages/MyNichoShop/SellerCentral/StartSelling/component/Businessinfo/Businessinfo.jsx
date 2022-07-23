import Menu from "../../../../../../components/menu/Menu";
import { useSelector } from "react-redux";
import "../Businessinfo/Businessinfo.css";
import { FormControl, InputLabel, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";
const Businessinfo = (props) => {
    const [apartment, setApartment] = useState(null);
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [name, setName] = useState(null);
    const [businessname, setBusinessName] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [vat, setvat] = useState(null);


    return (
        <>
            {!props.show && !props.address ? 
                    <div className="card row">
                        <div class="card-body row">
                            <div className='col-10'>
                                <h4 className="mb-3" >Add your Business Information</h4>
                            </div>
                            <div className='col-2'>
                                <p className="mb-3">Step 2 of 3</p>
                            </div>
                            <hr/>
                            <p>Please note that on EU sites, business are required by law to provide buyers with certain information about their business. Business seller information will be shown on all your item listings. learn more about Business seller information.</p>
                            <div className="col-6 mt-3">
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Business Name" variant="outlined" 
                                        value={businessname}
                                        onChange={(event) => setBusinessName(event.target.value)}
                                        error={businessname === ""}
                                        helperText={businessname === "" ? "Enter a name!" : null}
                                    />
                            </FormControl>
                        </div>
                        <div class="body row">
                            <div className="col-12">
                                <h6>Buisness address</h6><br />
                            </div>
                            <div className="col-6">
                                <FormControl className="form-control mb-4">
                                    <InputLabel>Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                </div>
                                <div className="col-6">
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Full name" variant="outlined" 
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        error={name === ""}
                                        helperText={name === "" ? "Enter a name!" : null}
                                    />
                                </FormControl>
                                </div>
                                <div className="col-6">
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Street and number, P.O. box, c/o." variant="outlined" 
                                        value={street}
                                        onChange={(event) => setStreet(event.target.value)}
                                        error={street === ""}
                                        helperText={street === "" ? "Enter a name!" : null}
                                    />
                                </FormControl>
                                </div>
                                <div className="col-6">
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="Apartment, suite, unit, building, floor, etc." variant="outlined" 
                                        value={apartment}
                                        onChange={(event) => setApartment(event.target.value)}
                                    />
                                </FormControl>
                                </div>
                                <div className="col-6">
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="City" variant="outlined" 
                                        value={city}
                                        onChange={(event) => setCity(event.target.value)}
                                        error={city === ""}
                                        helperText={city === "" ? "Enter a name!" : null}
                                    />
                                </FormControl>
                                </div>
                                <div className="col-4">
                                <FormControl className="col-12 mb-4">
                                    <TextField id="outlined-basic" label="State/Province/Region" variant="outlined" 
                                        value={state}
                                        onChange={(event) => setState(event.target.value)}
                                        error={state === ""}
                                        helperText={state === "" ? "Enter a name!" : null}
                                    />
                                </FormControl>
                                </div>
                                <div className="col-2">
                                <FormControl className="col-12 mb-4">
                                    <TextField id="outlined-basic" label="Zip code" variant="outlined" 
                                        value={zip}
                                        onChange={(event) => setZip(event.target.value)}
                                        error={zip === ""}
                                        helperText={zip === "" ? "Enter a name!" : null}
                                    />
                                </FormControl>
                                </div>
                                <div className="col-6">
                                <FormControl className="form-control mb-4">
                                    <PhoneInput
                                        country={'us'}
                                        value={''}
                                        inputStyle={{width: '100%', height: '50px'}}
                                    />
                                </FormControl>
                            </div>
                            <h6>VAT/GST Registration information</h6>
                            <br /><br />
                            <div className="col-6">
                                <p className="mb-1">Country</p>
                                <FormControl className="form-control mb-4">
                                    <InputLabel>-Select Country-</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="col-6">
                                <p className="mb-1">VAT/GST Registration number</p>
                                <FormControl className="form-control mb-4">
                                    <TextField id="outlined-basic" label="VAT/GST" variant="outlined" 
                                        value={vat}
                                        onChange={(event) => setvat(event.target.value)}
                                        error={vat === ""}
                                        helperText={vat === "" ? "Enter a name!" : null}
                                    />
                                </FormControl>
                            </div>

                        </div><hr />
                        <div className="button">
                        <button className="btn  col-6 btn-primary p-2 m-0" onClick={()=>{
                            props.changeshow(true);
                        }}>Continue to Bank Account</button>
                    </div><br />
                </div>
            </div>
            : props.address ?
            <div className="card row">
                <div class="card-body row">
                    <div className='col-10'>
                        <h4 className="colorgray" >Add your Business Information</h4>
                    </div>
                    <div className='col-2'>
                        <p className="colorgray">Step 2 of 3</p>
                    </div>
                </div>
            </div> : null
        }

      </>
    )
}
export default Businessinfo;
