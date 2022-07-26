// import "./accountaddyouraddress.scss";
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
import { useState ,useEffect} from "react";

import {
    InputAdornment,
    OutlinedInput,
} from "@mui/material";
// import PhoneInput from "react-phone-input-2";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import "react-phone-input-2/lib/style.css";
import "../../../../components/PhoneNumber/phonenumber.scss";
import {clearErrors,AddAddress} from "../../../../actions/addressAction";
import { useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import axios from "axios";
const AddressAddYourAddress = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const alert = useAlert();
  
    const { error, add_address } = useSelector(state=>state.address)

    console.log(error);
    console.log(add_address);

    // form all data
    const [getCountryData, setCountryData] = useState("");
    const [getFullNameData, setFullNameData] = useState("");
    const [getStreetNumberData, setStreetNumberData] = useState("");
    const [getApartmentData, setApartmentData] = useState("");
    const [getCityData, setCityData] = useState("");
    const [getStateData, setStateData] = useState("");
    const [getPostCodeData, setPostCodeData] = useState("");
    //const [getAreaCode, setAreaCode] = useState("");
    const [value, setValue] = useState()


    // console.log(value);
    // console.log(getCountryData);
    
    const getGeoInfo = () => {
        axios
          .get("https://ipapi.co/json/")
          .then((response) => {
            let data = response.data;
            console.log(data.country);
            setCountryData(data.country_code)
          })
          .catch((error) => {
            console.log(error);
          });
      };


    // error display
    const [isError, setError] = useState(false);

    // form all handler
    // const countryChangeHandler = (e) => {
    //     setCountryData(e.target.value[0]);
    // };

    // const areaCodeHandler = (e) => {
    //     setAreaCode(e.target.value);
    // };

    const fullNameHandler = (e) => {
        setFullNameData(e.target.value);
    };

    const streetNumberHandler = (e) => {
        setStreetNumberData(e.target.value);
    };

    const cityHandler = (e) => {
        setCityData(e.target.value);
    };

    const stateHandler = (e) => {
        setStateData(e.target.value);
    };

    const postCodeHandler = (e) => {
        setPostCodeData(e.target.value);
    };
    const apartmentHandler = (e) => {
        setApartmentData(e.target.value);
    };

    
    // form submit
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (
            getFullNameData &&
            getStreetNumberData &&
            getCityData
        ) {
            const data = {
                name:getFullNameData,
                address1:getStreetNumberData,
                address2:getApartmentData,
                city:getCityData,
                state:getStateData,
                zip:getPostCodeData,
                country:getCountryData,
                phone:value,
                addressType:1,
                status:1
            }

            dispatch(AddAddress(data))
        } else {
            setError(true);
        }
    };


    useEffect(() => {
        getGeoInfo();

        if (error) {
            //alert.show(error);
            Toastify(
                {
                text: error,
                className: "info",
                style: {
                    background:
                        "linear-gradient(to right, #00b09b, #96c93d)",
                    size: 10,
                },
                close: true,
            }
            ).showToast();
          //alert.error(error);
          dispatch(clearErrors());
        }
        if (add_address) {
            navigate("/addresses");
        }
      }, [dispatch, navigate,add_address, error ]);

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
                                <form onSubmit={formSubmitHandler}>
                                    {/* <div className="mb-3">
                                        <SelectCountry
                                            countryChangeHandler={
                                                countryChangeHandler
                                            }
                                        />
                                    </div> */}
                                    <div className="mb-3">
                                        <TextField
                                            error={
                                                isError &&
                                                getFullNameData.length === 0
                                                    ? true
                                                    : false
                                            }
                                            id="outlined-basic"
                                            label="Full name"
                                            variant="outlined"
                                            size="medium"
                                            value={getFullNameData}
                                            fullWidth
                                            onChange={fullNameHandler}
                                        />
                                        {isError &&
                                            getFullNameData.length === 0 && (
                                                <span className="text-danger">
                                                    Enter a name.
                                                </span>
                                            )}
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Street and number, P.O. box, c/o."
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                            onChange={streetNumberHandler}
                                            error={
                                                isError &&
                                                getStreetNumberData.length == 0
                                                    ? true
                                                    : false
                                            }
                                        />
                                        {isError &&
                                            getStreetNumberData.length == 0 && (
                                                <>
                                                    <span className="text-danger">
                                                        Enter address.
                                                    </span>
                                                    <br />
                                                </>
                                            )}
                                        {isError &&
                                            getStreetNumberData.length < 6 && (
                                                <span className="text-danger">
                                                    The address is too short.
                                                </span>
                                            )}
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Apartment, suite, unit, building, floor, etc."
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                            value={getApartmentData}
                                            onChange={apartmentHandler}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="City"
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                            onChange={cityHandler}
                                            error={
                                                isError &&
                                                getCityData.length === 0
                                                    ? true
                                                    : false
                                            }
                                        />

                                        {isError && getCityData.length === 0 && (
                                            <span className="text-danger">
                                                Enter a city name.
                                            </span>
                                        )}
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
                                                onChange={stateHandler}
                                                error={
                                                    isError && !getStateData
                                                        ? true
                                                        : false
                                                }
                                            >
                                                <MenuItem value={10}>
                                                    Noakhali
                                                </MenuItem>
                                                <MenuItem value={10}>
                                                    Chittagong
                                                </MenuItem>
                                                <MenuItem value={10}>
                                                    Dhaka
                                                </MenuItem>
                                            </Select>
                                        </FormControl>
                                        {isError && !getStateData && (
                                            <span className="text-danger">
                                                Enter state.
                                            </span>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Postcode"
                                            variant="outlined"
                                            size="medium"
                                            fullWidth
                                            onChange={postCodeHandler}
                                            error={
                                                isError &&
                                                getPostCodeData.length === 0
                                                    ? true
                                                    : false
                                            }
                                        />
                                        {isError &&
                                            getPostCodeData.length === 0 && (
                                                <span className="text-danger">
                                                    Enter Postcode.
                                                </span>
                                            )}
                                    </div>
                                    <div className="mb-3 ui-phone-codes-select">
                                        {/* <PhoneNumber email="indore"/> */}
                                        <PhoneInput
                                                        // country="US"
                                                        defaultCountry={getCountryData}
                                                        value={value}
                                                        onChange={setValue}
                                                    />
                                        {/* <InputLabel htmlFor="phone-no">Phone No:</InputLabel> */}
                                        {/* <OutlinedInput
                                            id="phone-no"
                                            label="Phone No:"
                                            onChange={phoneHandler}
                                            type="number"
                                            startAdornment={
                                                <InputAdornment position="start">
                                                    <PhoneInput
                                                        country={"us"}
                                                        value={getAreaCode}
                                                        onChange={areaCodeHandler}
                                                    /> 

                                                </InputAdornment>
                                            }
                                        /> */}
                                    </div>
                                    <div className="ui-commont-form-btn">
                                        <button type="submit">Save</button>
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

export default AddressAddYourAddress;
