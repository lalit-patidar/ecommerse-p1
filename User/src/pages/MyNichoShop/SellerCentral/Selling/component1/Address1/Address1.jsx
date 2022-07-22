import Menu from "../../../../../../components/menu/Menu";
import { useSelector } from "react-redux";
import "../Address1/Address1.css";
import { FormControl, InputLabel, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Address1 = () => {
    const showNotif = useSelector((state) => state.showNotif);
    return (
            <div className="card row">
                <div className="card-body row">
                    <div className="col-10">
                        <h5 className="card-title">Add your address</h5>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-light"><i className="fa fa-edit"></i> Edit</button>
                    </div>
                    <span className="text-muted">United State</span>
                    <span className="text-muted">Aspen Lubin</span>
                    <span className="text-muted">1234 El Camino Real</span>
                    <span className="text-muted">STE 100-386</span>
                    <span className="text-muted">Sunnyvale</span>
                    <span className="text-muted">Alabama</span>
                    <span className="text-muted">98765-4321</span>
                    <span className="text-muted">+1 (123) 4567 890</span>

                </div>
            </div>

    )
}
export default Address1;