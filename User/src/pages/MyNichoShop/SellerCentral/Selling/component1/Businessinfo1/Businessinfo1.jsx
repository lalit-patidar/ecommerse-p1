import Menu from "../../../../../../components/menu/Menu";
import { useSelector } from "react-redux";
import "../Businessinfo1/Businessinfo1.css";
import { FormControl, InputLabel, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Businessinfo1 = () => {
    const showNotif = useSelector((state) => state.showNotif);
    return (
            <div className="card row">
                <div class="card-body row">
                    <div className="col-10">
                        <h5 class="card-title">Business Information</h5><br />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light"><i className="fa fa-edit"></i> Edit</button>
                    </div>
                    <h6 className="heading">Business Name</h6><br />
                    <span className="text-muted">NichoShop Inc.</span>
                    <br />
                    <h6 className="heading">Business address</h6><br />
                    <span className="text-muted">Bulgaria</span>
                    <span className="text-muted">Aspen Lubin</span>
                    <span className="text-muted">blv, Ivan Vazov 123 EAL</span>
                    <span className="text-muted">Apt. 5</span>
                    <span className="text-muted">Sofia</span>
                    <span className="text-muted">Sofia</span>
                    <span className="text-muted">1000</span>
                    <span className="text-muted">+359 987654321</span><br/>
                    <h6 className="heading">VAT / GST Registration information</h6><br />
                    <span className="text-muted">Bulgaria</span>
                    <span className="text-muted">1234567890</span>

                </div>
            </div>

    )
}
export default Businessinfo1;