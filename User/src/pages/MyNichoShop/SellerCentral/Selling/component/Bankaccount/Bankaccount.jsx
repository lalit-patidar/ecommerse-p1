import * as React from 'react';
import { useSelector } from "react-redux";
import "../Bankaccount/Bankaccount.css";
import { FormControl, InputLabel, TextField, RadioGroup, FormControlLabel, Radio, Tooltip, IconButton } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { styled } from '@mui/material/styles';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const Bankaccount = (props) => {
    const showNotif = useSelector((state) => state.showNotif);
    const [Country, setCountry] = useState(null);
    const [bankaddress, setbankaddress] = useState(null);
    const [apartment, setapartment] = useState(null);
    const [city, setcity] = useState(null);
    const [state, setstate] = useState(null);
    const [zip, setzip] = useState(null);
    const [accountname, setaccountname] = useState(null);
    const [iban, setiban] = useState(null);
    const [bic, setbic] = useState(null);

    const [sr1, setsr1] = useState(null);
    const [sr2, setsr2] = useState(null);
    const [sr3, setsr3] = useState(null);
    const [bankname, setbankname] = useState(null);
    const [province, setprovince] = useState(null);
    const [bankcity, setbankcity] = useState(null);
    const [branchname, setbranchname] = useState(null);
    const [businesslicense, setbusinesslicense] = useState(null);
    const [isbusiness, setisbusiness] = useState('Yes');

    const HtmlTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: '#ffffff',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 220,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
          shadow: '10px'
        },
    }));
    
    return (
        <div className="card row">
            {props.show ? 
            <div class="card-body row">
                <div className='col-10'>
                    <h4 className="mb-3" >Add a Bank Account</h4>
                </div>
                <div className='col-2'>
                    <p className="mb-3">Step 3 of 3</p>
                </div>
                <hr/>
                <p>Before creating your listing, please add a valid bank account number which will be used to easily payout funds from products sold.</p><br /><br />
                <h6><b> Bank Account Holders Address</b></h6><br /><br />
                <div className="col-6">
                    <FormControl className="form-control mb-4">
                        <InputLabel>Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Age"
                            value={Country}
                            onChange={event=>setCountry(event.target.value)}
                        >
                            <MenuItem value={1}>Bulgeria</MenuItem>
                            <MenuItem value={2}>United Kingdom</MenuItem>
                            <MenuItem value={3}>United States</MenuItem>
                            <MenuItem value={4}>Canada</MenuItem>
                            <MenuItem value={5}>Israel</MenuItem>
                            <MenuItem value={6}>Australia</MenuItem>
                            <MenuItem value={7}>China</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="col-6">
                </div>
                <div className="col-6">
                    <FormControl className="form-control mb-4">
                        <TextField id="outlined-basic" label="Street and number, P.O. box, c/o." variant="outlined" 
                            value={bankaddress}
                            onChange={(event) => setbankaddress(event.target.value)}
                            error={bankaddress === ""}
                            helperText={bankaddress === "" ? "This adress is too short." : null}
                        />
                    </FormControl>
                </div>
                <div className="col-6">
                    <FormControl className="form-control mb-4">
                        <TextField id="outlined-basic" label="Apartment, suite, unit, building, floor, etc." variant="outlined" 
                            value={apartment}
                            onChange={(event) => setapartment(event.target.value)}
                        />
                    </FormControl>
                </div>
                <div className="col-6">
                    <FormControl className="form-control mb-4">
                        <TextField id="outlined-basic" label="City" variant="outlined" 
                            value={city}
                            onChange={(event) => setcity(event.target.value)}
                            error={city === ""}
                            helperText={city === "" ? "Enter a city name." : null}
                        />
                    </FormControl>
                </div>
                <div className="col-4">
                    <FormControl className="col-12 mb-4">
                        <TextField id="outlined-basic" label="State/Province/Region" variant="outlined" 
                            value={state}
                            onChange={(event) => setstate(event.target.value)}
                            error={state === ""}
                            helperText={state === "" ? "Enter a state, region, or province." : null}
                        />
                    </FormControl>
                </div>
                <div className="col-2">
                    <FormControl className="col-12 mb-4">
                        <TextField id="outlined-basic" label="Zip code" variant="outlined" 
                            value={zip}
                            onChange={(event) => setzip(event.target.value)}
                            error={zip === ""}
                            helperText={zip === "" ? "Enter a Zip code." : null}
                        />
                    </FormControl>
                </div>
                {Country == '1' && (
                    <div className="col-6">
                        <p><b>Bank Account Holder Name</b>
                        <HtmlTooltip title={<React.Fragment>{"The name you enter should match with the name associated with the bank account"}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" 
                                value={accountname}
                                onChange={(event) => setaccountname(event.target.value)}
                                error={accountname === ""}
                                helperText={accountname === "" ? "Enter the bank account holder name." : null}
                            />
                        </FormControl>
                        <p><b>IBAN</b>
                        <HtmlTooltip title={<React.Fragment>{"Your international bank account number (IBAN) is the account number usd for routing funds to your bank account. Please use the 22 charactrs from your bank statement."}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Up to 34 characters" variant="outlined" 
                                value={iban}
                                onChange={(event) => setiban(event.target.value)}
                                error={iban === ""}
                                helperText={iban === "" ? "Enter the IBAN." : null}
                            />
                        </FormControl>
                        <p><b>BIC</b>
                        <HtmlTooltip title={<React.Fragment>{"Your bank identifier code (BIC) is the code for your particular bank. Example: ABCDITA1 or ABCDITA1A12. Please use the characters from your bank statement. (8 or 11 characters)"}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="8 or 11 characters" variant="outlined" 
                                value={bic}
                                onChange={(event) => setbic(event.target.value)}
                                error={bic === ""}
                                helperText={bic === "" ? "Enter the BIC." : null}
                            />
                        </FormControl>
                    </div>
                )}
                {Country == '2' && (
                    <div className="col-6">
                        <p><b>Bank Sort Code</b>
                        <HtmlTooltip title={<React.Fragment>{""}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4" error={sr1 === "" || sr2 === "" || sr3 === ""}>
                            <div className="row ml-2">
                                <TextField id="outlined-basic" className="col-2" label="00" variant="outlined" 
                                    value={sr1}
                                    onChange={(event) => setsr1(event.target.value)}
                                />
                                <div className="col-1"></div>
                                <TextField id="outlined-basic" className="col-2" label="00" variant="outlined" 
                                    value={sr2}
                                    onChange={(event) => setsr2(event.target.value)}
                                />
                                <div className="col-1"></div>
                                <TextField id="outlined-basic" className="col-2" label="00" variant="outlined" 
                                    value={sr3}
                                    onChange={(event) => setsr3(event.target.value)}
                                />
                            </div>
                            {(sr1 === "" || sr2 === "" || sr3 === "") && (
                                <FormHelperText id="component-error-text">Enter the bank sort code.</FormHelperText>
                            )}
                        </FormControl>
                        <p><b>Bank Account Number </b>
                        <HtmlTooltip title={<React.Fragment>{"You can find your bank account number in your statement. (8 digits)"}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Number" variant="outlined" 
                                value={iban}
                                onChange={(event) => setiban(event.target.value)}
                                error={iban === ""}
                                helperText={iban === "" ? "Enter the bank account number." : null}
                            />
                        </FormControl>

                    </div>
                )}
                {Country == '3' && (
                    <div className="col-6">
                        <p><b>Bank Account Holder Name</b>
                        <HtmlTooltip title={<React.Fragment>{"The name you enter should match with the name associated with the bank account"}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" 
                                value={accountname}
                                onChange={(event) => setaccountname(event.target.value)}
                                error={accountname === ""}
                                helperText={accountname === "" ? "Enter the bank account holder name." : null}
                            />
                        </FormControl>
                        <p><b>9-Digit Routing Number</b>
                        <HtmlTooltip title={<React.Fragment>{"Your account must be enabled to receive deposits through the Automated Clearing House (ACH). PLease contact your bank for assistance (Up to 17 digits)"}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="9 digits" variant="outlined" 
                                value={iban}
                                onChange={(event) => setiban(event.target.value)}
                                error={iban === ""}
                                helperText={iban === "" ? "Enter the 9-digit routing number." : null}
                            />
                        </FormControl>
                        <p><b>Bank Account Number</b>
                        <HtmlTooltip title={<React.Fragment>{"(Federal ABA Number) Provide a routing number for Automated Clearing House (ACH) or electronic funds transfers instead of wire transfers. Please contact your bank for assistance."}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Number" variant="outlined" 
                                value={bic}
                                onChange={(event) => setbic(event.target.value)}
                                error={bic === ""}
                                helperText={bic === "" ? "Enter the bank account number." : null}
                            />
                        </FormControl>
                    </div>
                )}
                {Country == '4' && (
                    <div className="col-6">
                        <p><b>Branch Code</b></p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="5 digits" variant="outlined" 
                                value={accountname}
                                onChange={(event) => setaccountname(event.target.value)}
                                error={accountname === ""}
                                helperText={accountname === "" ? "Enter the branch code." : null}
                            />
                        </FormControl>
                        <p><b>Institution Number</b></p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="3 digits" variant="outlined" 
                                value={iban}
                                onChange={(event) => setiban(event.target.value)}
                                error={iban === ""}
                                helperText={iban === "" ? "Enter the  institution number." : null}
                            />
                        </FormControl>
                        <p><b>Bank Account Number</b></p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Between 7 and 35 numeric" variant="outlined" 
                                value={bic}
                                onChange={(event) => setbic(event.target.value)}
                                error={bic === ""}
                                helperText={bic === "" ? "Enter the bank account number." : null}
                            />
                        </FormControl>
                        <p><b>Bank Name</b></p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Bank name" variant="outlined" 
                                value={bankname}
                                onChange={(event) => setbankname(event.target.value)}
                                error={bankname === ""}
                                helperText={bankname === "" ? "Enter the bank name." : null}
                            />
                        </FormControl>
                    </div>
                )}
                {Country == '5' && (
                    <div className="col-6">
                        <p><b>Bank Account Holder Name</b>
                        <HtmlTooltip title={<React.Fragment>{"The name you enter should match with the name associated with the bank account"}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" 
                                value={accountname}
                                onChange={(event) => setaccountname(event.target.value)}
                                error={accountname === ""}
                                helperText={accountname === "" ? "Enter the bank account holder name." : null}
                            />
                        </FormControl>
                        <p><b>BIC</b></p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="8 or 11 characters" variant="outlined" 
                                value={bic}
                                onChange={(event) => setbic(event.target.value)}
                                error={bic === ""}
                                helperText={bic === "" ? "Enter the BIC." : null}
                            />
                        </FormControl>
                        <p><b>Bank Account Number</b></p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="BIC Number" variant="outlined" 
                                value={iban}
                                onChange={(event) => setiban(event.target.value)}
                                error={iban === ""}
                                helperText={iban === "" ? "Enter the bank account number." : null}
                            />
                        </FormControl>
                    </div>
                )}
                {Country == '6' && (
                    <div className="col-6">
                        <p><b>Bank State Branch Code (BSB)</b>
                        <HtmlTooltip title={<React.Fragment>{"The code for your particular bank and branch. Example: 123456. Please use the number from your bank statement. (6 numeric)."}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" 
                                value={accountname}
                                onChange={(event) => setaccountname(event.target.value)}
                                error={accountname === ""}
                                helperText={accountname === "" ? "Enter the bank state branch code." : null}
                            />
                        </FormControl>
                        <p><b>Bank Account Number</b>
                        <HtmlTooltip title={<React.Fragment>{"Please enter your bank account number (between 6 and 10 alphanumeric)."}</React.Fragment>}>
                            <IconButton>
                                <InfoOutlinedIcon />
                            </IconButton>
                        </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="6 to 10 charactors" variant="outlined" 
                                value={iban}
                                onChange={(event) => setiban(event.target.value)}
                                error={iban === ""}
                                helperText={iban === "" ? "Enter the bank account number." : null}
                            />
                        </FormControl>
                    </div>
                )}
                {Country == '7' && (
                    <div className="col-6">
                        <p><b>Is this a business bank account?</b></p><br />
                        <FormControl className="form-control mb-4">
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                                value={isbusiness}
                                onChange={(event) => setisbusiness(event.target.value)}
                            >
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </FormControl>
                        {isbusiness == 'Yes' ?
                            <p><b>Business Licence Number</b>
                            <HtmlTooltip title={<React.Fragment>{"Either 9 or 18 characters. Example: 12345678AB9CDEFG0H."}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                            </p>
                        :
                            <p><b>National ID Number</b>
                            <HtmlTooltip title={<React.Fragment>{"Enter the 18 or 15 digit China National ID number of the bank account holder. Example: 12345678912345678."}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                            </p>
                        }
                        <br />
                        {isbusiness == 'Yes' ?
                            <FormControl className="form-control mb-4">
                                <TextField id="outlined-basic" label="Example: 12345678AB9CDEFG0H" variant="outlined" 
                                    value={businesslicense}
                                    onChange={(event) => setbusinesslicense(event.target.value)}
                                    error={businesslicense === ""}
                                    helperText={businesslicense === "" ? "Enter the business license number." : null}
                                />
                            </FormControl>
                            :
                            <FormControl className="form-control mb-4">
                                <TextField id="outlined-basic" label="Example: 123456789012345678" variant="outlined" 
                                    value={businesslicense}
                                    onChange={(event) => setbusinesslicense(event.target.value)}
                                    error={businesslicense === ""}
                                    helperText={businesslicense === "" ? "Enter the national ID number." : null}
                                />
                            </FormControl>
                        }
                        <p><b>Bank Name</b>
                        <HtmlTooltip title={<React.Fragment>{"Name of your bank"}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Example: 中国银行" variant="outlined" 
                                value={bankname}
                                onChange={(event) => setbankname(event.target.value)}
                                error={bankname === ""}
                                helperText={bankname === "" ? "Enter the bank name." : null}
                            />
                        </FormControl>
                        <p><b>Branch Name</b>
                        <HtmlTooltip title={<React.Fragment>{"Name of your specific bank branch"}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Example: 深圳分行龙华支行" variant="outlined" 
                                value={branchname}
                                onChange={(event) => setbranchname(event.target.value)}
                                error={branchname === ""}
                                helperText={branchname === "" ? "Enter the branch name." : null}
                            />
                        </FormControl>
                        <p><b>Bank City</b>
                        <HtmlTooltip title={<React.Fragment>{"The city where your bank is located"}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Example: 深圳" variant="outlined" 
                                value={bankcity}
                                onChange={(event) => setbankcity(event.target.value)}
                                error={bankcity === ""}
                                helperText={bankcity === "" ? "Enter the bank city." : null}
                            />
                        </FormControl>
                        <p><b>Bank Province</b>
                        <HtmlTooltip title={<React.Fragment>{"The province where your bank is located"}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Example: 广东" variant="outlined" 
                                value={province}
                                onChange={(event) => setprovince(event.target.value)}
                                error={province === ""}
                                helperText={province === "" ? "Enter the bank province." : null}
                            />
                        </FormControl>
                        <p><b>Account Holder Name</b>
                        <HtmlTooltip title={<React.Fragment>{"Account holder’s name must match the name on your bank account. Do not include the name of your bank. Example: Company XZY. This information must match what your bank has on file in order to receive your payments."}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Example: 某某公司" variant="outlined" 
                                value={accountname}
                                onChange={(event) => setaccountname(event.target.value)}
                                error={accountname === ""}
                                helperText={accountname === "" ? "Enter the account holder name." : null}
                            />
                        </FormControl>
                        <p><b>Bank Account Number</b>
                        <HtmlTooltip title={<React.Fragment>{"The unique number assigned to your account by your account by your bank (ussually up to 23 digits)."}</React.Fragment>}>
                                <IconButton>
                                    <InfoOutlinedIcon />
                                </IconButton>
                            </HtmlTooltip>
                        </p><br />
                        <FormControl className="form-control mb-4">
                            <TextField id="outlined-basic" label="Example: 012356789" variant="outlined" 
                                value={iban}
                                onChange={(event) => setiban(event.target.value)}
                                error={iban === ""}
                                helperText={iban === "" ? "Enter the bank account number." : null}
                            />
                        </FormControl>
                    </div>
                )}                    <div className="col-12">
                    <p><b>Bank Account Currency</b></p><br />
                    </div>
                    <div className="col-6">
                        <FormControl className="form-control mb-4">
                        <InputLabel>Choose a currency</InputLabel>
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
                    <hr />
                    <div className="button-hh">
                        <button className="btn col-6 btn-primary p-2 m-0">Verify Bank Account</button>
                    </div>
                </div>
                :
                <div class="card-body row">
                    <div className='col-10'>
                        <h4 className="colorgray" >Add a Bank Account</h4>
                    </div>
                    <div className='col-2'>
                        <p className="colorgray">Step 3 of 3</p>
                    </div>
                </div>
            }
        </div>
    );
}
export default Bankaccount;