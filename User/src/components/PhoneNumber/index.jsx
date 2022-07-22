import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./phonenumber.scss";

const PhoneNumber = ({ phoneHandler, areaCodeHandler, getAreaCode ,email}) => {
    
    console.log(email);
    
    return (
        <>
            <div className="ui-phone-codes-select">
                <FormControl variant="outlined" fullWidth size="small">
                    <InputLabel htmlFor="phone-no">Phone No:</InputLabel>
                    <OutlinedInput
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
                    />
                </FormControl>
            </div>
        </>
    );
};

export default PhoneNumber;
