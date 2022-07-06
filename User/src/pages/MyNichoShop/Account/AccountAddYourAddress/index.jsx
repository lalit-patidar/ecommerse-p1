import "./accountaddyouraddress.scss";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";
import SelectCountry from "../../../../components/SelectCountry";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import PhoneNumber from "../../../../components/PhoneNumber";
import { useState } from "react";

const AccountAddYourAddress = () => {
    // form all data
    const [getCountryData, setCountryData] = useState("");
    const [getFullNameData, setFullNameData] = useState("");
    const [getStreetNumberData, setStreetNumberData] = useState("");

    // form all handler
    const countryChangeHandler = (e) => {
        e.target.value[0] && setCountryData(e.target.value[0]);
    };

    const fullNameHandler = (e) => {
        e.target.value && setFullNameData(e.target.value);
    };

    const streetNumberHandler = (e) => {
        e.target.value && setStreetNumberData(e.target.value);
    };

    // form submit
    const formSubmitHandler = () => {};
    return (
        <>
            <div className="ui-add-your-address-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="ui-common-logo">
                                <Logo />
                            </div>
                            <div className="ui-commont-form-box">
                                <p>Add your address</p>
                                <form onClick={formSubmitHandler}>
                                    <div className="mb-3">
                                        <SelectCountry
                                            countryChangeHandler={
                                                countryChangeHandler
                                            }
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Full name"
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                            onChange={fullNameHandler}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Street and number, P.O. box, c/o."
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                            onChange={streetNumberHandler}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Apartment, suite, unit, building, floor, etc."
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="City"
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                State
                                            </InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                label="State"
                                            >
                                                <MenuItem value={10}>
                                                    Ten
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Postcode"
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                        />
                                    </div>
                                    <div className="mb-3 ui-phone-codes-select">
                                        <PhoneNumber />
                                    </div>
                                    <div className="ui-commont-form-btn">
                                        <button>Save</button>
                                        <button>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountAddYourAddress;
