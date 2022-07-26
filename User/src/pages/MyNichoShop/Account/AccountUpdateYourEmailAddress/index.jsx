import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
// import "./accountchangeyourname.scss";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";
import axios from "axios";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const AccountUpdateYourEmailAddress = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [email, setemail] = useState(null);
    const [oldemail, setoldemail] = useState(null);
    const updateemail = async () => {
        try{
            var formdata = {
                "userid":userDetails.id,
                "newEmail":email
            };
            const data = await axios.put(
                `${process.env.REACT_APP_API_DOMAIN}/account/changeEmail`,
                formdata
            );
            toast('Updated successfully', "linear-gradient(to right, #00b09b, #96c93d)")
        }catch(e){
            toast(e.response.data.error, "linear-gradient(to right, #00b09b, #ff0000)")
        }
    }

    const checkuser = async () => {
        var u = await getLocalstore('_userLogin');
        if(u && u.id){
            setUserDetails(u);
            setemail(u.email);
        }
    }

    useEffect(()=>{
        checkuser();
    },[])

    return (
        <>
            <div className="ui-cyn-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="ui-cyn-log">
                                <Logo />
                            </div>
                            <div className="ui-cyn-form">
                                <h2>Update your email address</h2>
                                <p>
                                    <b>Current email:</b> example@domain.com
                                    <br /> A valid email address is requiered to
                                    bid, buy and sell with us. <br /> <br />{" "}
                                    Enter the new email address you would like
                                    to associate with your account below. We
                                    will send a Single-Use Code (SUC) to that
                                    address.
                                </p>
                                <form action="" method="get">
                                    <div className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="New email address"
                                            variant="outlined"
                                            fullWidth
                                            size="medium"
                                            type="email"
                                            value={email}
                                            onChange={event=>{
                                                setemail(event.target.value);
                                            }}

                                        />
                                    </div>
                                    <Button variant="contained">
                                        Continue
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountUpdateYourEmailAddress;
