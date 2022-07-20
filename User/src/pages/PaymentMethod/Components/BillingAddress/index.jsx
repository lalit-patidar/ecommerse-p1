import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import { useState } from "react";
import PhoneNumber from "../../../../components/PhoneNumber";
import "./billingaddress.scss";

const BillingAddress = () => {
    // billing address store
    const [billingAddress, setBillingAddress] = useState({
        country1: "",
        fullName: "",
        streetAddress: "",
        apartment: "",
        townCity: "",
        country2: "",
        postCode: "",
        phoneNumber: "",
        areaCode: "",
    });

    // is save billing address
    const [isSave, setSave] = useState(false);

    return (
        <>
            <div className="ui-billing-address-box">
                <div className="ui-bab-head">
                    <h4>Billing address</h4>
                </div>
                {isSave && (
                    <>
                        <div className="ui-bab-list">
                            <ul>
                                <li>Name Surname</li>
                                <li>2 Savoy Road</li>
                                <li>Reading, BerkshireRB3 7LU</li>
                                <li>United Kingdom</li>
                            </ul>
                            <button onClick={() => setSave(false)}>
                                <svg
                                    width="16"
                                    height="15"
                                    viewBox="0 0 18 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.0625 3.4375L1.375 12.125L1 15.6875C0.9375 16.1562 1.34375 16.5625 1.8125 16.5L5.375 16.125L14.0625 7.4375L10.0625 3.4375ZM16.5312 2.84375L14.6562 0.96875C14.0938 0.375 13.125 0.375 12.5312 0.96875L10.7812 2.71875L14.7812 6.71875L16.5312 4.96875C17.125 4.375 17.125 3.40625 16.5312 2.84375Z"
                                        fill="#0072BC"
                                    />
                                </svg>
                                Change
                            </button>
                        </div>
                        <div className="ui-ana-btn">
                            <svg
                                width="481"
                                height="1"
                                viewBox="0 0 481 1"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                    y1="0.5"
                                    x2="481"
                                    y2="0.5"
                                    stroke="#CBCBCB"
                                    stroke-dasharray="10 0"
                                />
                            </svg>

                            <button>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 7.6V16.4M7.6 12H16.4M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
                                        stroke="#0072BC"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                Add a new address
                            </button>
                        </div>
                    </>
                )}
                <form onSubmit={(e) => e.preventDefault()}>
                    {!isSave && (
                        <>
                            <div className="mb-3">
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">
                                        Country
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Country"
                                        value={billingAddress.country1}
                                        onChange={(e) => {
                                            setBillingAddress({
                                                ...billingAddress,
                                                country1: e.target.value,
                                            });
                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    label="Full name"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={billingAddress.fullName}
                                    onChange={(e) => {
                                        setBillingAddress({
                                            ...billingAddress,
                                            fullName: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    label="Street address"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={billingAddress.streetAddress}
                                    onChange={(e) => {
                                        setBillingAddress({
                                            ...billingAddress,
                                            streetAddress: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    label="Apartment"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={billingAddress.apartment}
                                    onChange={(e) => {
                                        setBillingAddress({
                                            ...billingAddress,
                                            apartment: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    label="Town/City"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={billingAddress.townCity}
                                    onChange={(e) => {
                                        setBillingAddress({
                                            ...billingAddress,
                                            townCity: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <FormControl fullWidth size="small">
                                    <InputLabel id="demo-simple-select-label">
                                        Country
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Country"
                                        value={billingAddress.country2}
                                        onChange={(e) => {
                                            setBillingAddress({
                                                ...billingAddress,
                                                country2: e.target.value,
                                            });
                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="mb-3">
                                <TextField
                                    id="outlined-basic"
                                    label="Postcode"
                                    variant="outlined"
                                    fullWidth
                                    size="small"
                                    value={billingAddress.postCode}
                                    onChange={(e) => {
                                        setBillingAddress({
                                            ...billingAddress,
                                            postCode: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <PhoneNumber
                                    phoneHandler={(e) => {
                                        setBillingAddress({
                                            ...billingAddress,
                                            phoneNumber: e.target.value,
                                        });
                                    }}
                                    areaCodeHandler={(e) => {
                                        setBillingAddress({
                                            ...billingAddress,
                                            areaCode: e,
                                        });
                                    }}
                                />
                            </div>
                        </>
                    )}
                    <div className="ui-ba-botton">
                        <button type="submit" onClick={() => setSave(true)}>
                            Add
                        </button>
                        <button>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BillingAddress;
