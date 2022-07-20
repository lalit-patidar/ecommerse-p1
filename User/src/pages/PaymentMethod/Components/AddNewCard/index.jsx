import { TextField } from "@mui/material";
import ErrorNotify from "../ErrorNotify";
import "./addnewcard.scss";

const AddNewCard = () => {
    return (
        <>
            <div className="ui-add-new-card-box">
                <div className="ui-anc-head">
                    <p>Add a new card</p>
                </div>
                <ErrorNotify />
                <div className="ui-anc-form">
                    <div className="mb-3">
                        <TextField
                            id="outlined-basic"
                            label="Card number"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </div>
                    <div className="mb-3">
                        <TextField
                            id="outlined-basic"
                            label="Cardholder’s name"
                            variant="outlined"
                            fullWidth
                            size="small"
                        />
                    </div>
                    <div className="ui-anc-expire">
                        <div className="row">
                            <div className="col-lg-4">
                                <TextField
                                    id="outlined-basic"
                                    label="Expiration date"
                                    variant="outlined"
                                    placeholder="MM/YY"
                                    fullWidth
                                    size="small"
                                    focused={true}
                                />
                            </div>
                            <div className="col-lg-4 d-flex align-content-center gap-1">
                                <TextField
                                    id="outlined-basic"
                                    label="Security code"
                                    variant="outlined"
                                    placeholder="3 or 4 digits"
                                    fullWidth
                                    size="small"
                                    focused={true}
                                />
                                <button type="button">
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M11.75 1.5C6.08908 1.5 1.5 6.08908 1.5 11.75C1.5 17.4109 6.08908 22 11.75 22C17.4109 22 22 17.4109 22 11.75C22 6.08908 17.4109 1.5 11.75 1.5ZM0 11.75C0 5.26065 5.26065 0 11.75 0C18.2393 0 23.5 5.26065 23.5 11.75C23.5 18.2393 18.2393 23.5 11.75 23.5C5.26065 23.5 0 18.2393 0 11.75ZM11.75 6.6C12.1642 6.6 12.5 6.93579 12.5 7.35V11.75C12.5 12.1642 12.1642 12.5 11.75 12.5C11.3358 12.5 11 12.1642 11 11.75V7.35C11 6.93579 11.3358 6.6 11.75 6.6ZM11 16.15C11 15.7358 11.3358 15.4 11.75 15.4H11.761C12.1752 15.4 12.511 15.7358 12.511 16.15C12.511 16.5642 12.1752 16.9 11.761 16.9H11.75C11.3358 16.9 11 16.5642 11 16.15Z"
                                            fill="#616161"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddNewCard;
