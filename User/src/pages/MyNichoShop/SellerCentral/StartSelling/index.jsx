import Menu from "../../../../components/menu/Menu";
// import Notification from "../../components/notification/Notification";
import { useSelector } from "react-redux";
import "../sellercentral.css";
import NavigationAndTItle from "../Component/NavigationAndTItle/NavigationAndTItle";
import TabPanelHolder from "../Component/TabPanel/tabpanel";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import Notification from "../../../../components/notification/Notification";
import { FormControl, InputLabel, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Address from "./component/Address/Address";
import Bankaccount from "./component/Bankaccount/Bankaccount";
import Businessinfo from "./component/Businessinfo/Businessinfo";
import Address1 from "./component1/Address1/Address1";
import Businessinfo1 from "./component1/Businessinfo1/Businessinfo1";
import Bankaccount1 from "./component1/Bankaccount1/Bankaccount1";
import { useState } from "react";

const StartSelling = () => {
    const [address, setAddress] = useState(true);
    const [bank, setbank] = useState(false);
    return (
        <>
            <div>
                <div className="overview-page">
                    <Menu />
                </div>
                <div className="container-md mt-5">
                    {!address && (
                        <Address1 />
                    )}
                    <br />
                    {bank && (
                        <Businessinfo1 />
                    )}
                    {/* <Bankaccount1/><br /> */}

                    {address && (
                        <div>
                            <Address show={address} changeshow={setAddress} /><br />
                        </div>
                    )}
                    <Businessinfo show={bank} address={address} changeshow={setbank}/><br />
                    <Bankaccount show={bank} changeshow={setbank}/><br />
                </div>
                <Footer />
            </div>
        </>

    );
}

export default StartSelling;
