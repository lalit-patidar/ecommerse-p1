import { useSelector } from "react-redux";
import "../Address/Address.css";
import { FormControl, InputLabel, TextField, FormHelperText } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";

const Address = (props)=>{
    const [phone, setphone] = useState(null);
    const [name, setname] = useState(null);
    const [zip, setzip] = useState(null);
    const [city, setcity] = useState(null);
    const [addressline1, setaddressline1] = useState(null);
    const [addressline2, setaddressline2] = useState(null);
    const showNotif = useSelector((state) => state.showNotif);
    return (
        <>
            <div className="card row">
                <div class="card-body row">
                    <div className='col-10'>
                        <h4 className="mb-3">Add your address</h4>
                    </div>
                    <div className='col-2'>
                        <p className="mb-3">Step 1 of 3</p>
                    </div>

                    <hr/>
                    <p>Before creating your first listing, please add your address from where you will ship products sold.</p>
                    <br /><br />
                    <div className="col-12 row">
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
                                    onChange={(event) => setname(event.target.value)}
                                    error={name === ""}
                                    helperText={name === "" ? "Enter a name!" : null}
                                />
                            </FormControl>
                        </div>
                        <div className="col-6">
                            <FormControl className="form-control mb-4">
                                <TextField id="outlined-basic" label="Street and number, P.O. box, c/o." variant="outlined" 
                                    value={addressline1}
                                    onChange={(event) => setaddressline1(event.target.value)}
                                    error={addressline1 === ""}
                                    helperText={addressline1 === "" ? "This address is too short" : null}
                                />
                            </FormControl>
                        </div>
                        <div className="col-6">
                            <FormControl className="form-control mb-4">
                                <TextField id="outlined-basic" label="Apartment, suite, unit, building, floor, etc." variant="outlined" 
                                    value={addressline2}
                                    onChange={(event) => setaddressline2(event.target.value)}
                                />
                            </FormControl>
                        </div>
                        <div className="col-6">
                            <FormControl className="form-control mb-4">
                                <TextField id="outlined-basic" label="City" variant="outlined" 
                                    value={city}
                                    onChange={(event) => setcity(event.target.value)}
                                    error={city === ""}
                                    helperText={city === "" ? "Enter a city name!" : null}
                                />
                            </FormControl>
                        </div>
                        <div className="col-4">
                            <FormControl className="col-12 mb-4">
                                <InputLabel>State</InputLabel>
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
                        <div className="col-2">
                            <FormControl className="mb-4">
                                <TextField id="outlined-basic" label="Zip code" variant="outlined" 
                                    value={zip}
                                    onChange={(event) => setzip(event.target.value)}
                                    error={zip === ""}
                                    helperText={zip === "" ? "Enter a ZIP code." : null}
                                />
                            </FormControl>
                        </div>
                        <div className="col-6">
                            <FormControl className="form-control mb-4" error={phone === ""}>
                                <PhoneInput
                                    country={'us'}
                                    value={phone}
                                    onChange={phones => setphone(phones)}
                                    inputStyle={{width: '100%', height: '50px'}}
                                />
                                {phone === "" && (
                                    <FormHelperText id="component-error-text">Error</FormHelperText>
                                )}
                            </FormControl>
                        </div>
                    </div><hr />
                    <div className="button">
                        <button className="btn col-6 btn-primary p-2 m-0" onClick={()=>{
                            props.changeshow(false);
                        }}>Continue to Business information</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;

    