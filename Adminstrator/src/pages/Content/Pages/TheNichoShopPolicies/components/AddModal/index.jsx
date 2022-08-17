import "./addmodal.scss";
import { MdAdd } from "react-icons/md";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddModal = ({ cancelHandler }) => {
    // select radio
    const [isPolicySelect, setPolicySelect] = useState(0);

    const signleHandler = (e) => {
        setPolicySelect(e.target.value);
    };

    const multipleHandler = (e) => {
        setPolicySelect(e.target.value);
    };

    // store form data
    const [signleInput, setIngleInput] = useState("");
    const [getMultiplePolicy, setMultiplePolicy] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (signleInput !== "") {
            setMultiplePolicy((old) => [
                ...old,
                { id: uuidv4, name: signleInput },
            ]);
            setIngleInput("");
        }
    };

    const multipleInputHandler = (e) => {
        setIngleInput(e.target.value);
    };

    return (
        <>
            <div className="ui-add-modal-box">
                <h4>Add a</h4>
                <div className="ui-add-modal-box-radio">
                    <div className="ui-add-modal-box-radio-single">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                name="select-policy"
                                type="radio"
                                defaultChecked={
                                    isPolicySelect == 0 ? true : false
                                }
                                value={0}
                                onClick={signleHandler}
                                id="signle-policy"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="signle-policy"
                            >
                                Single policy
                            </label>
                        </div>
                        {isPolicySelect == 0 && (
                            <form>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Policy name"
                                />
                            </form>
                        )}
                    </div>
                    <div className="ui-add-modal-box-radio-single">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                name="select-policy"
                                type="radio"
                                onClick={multipleHandler}
                                defaultChecked={
                                    isPolicySelect == 1 ? true : false
                                }
                                value={1}
                                id="multiple-policy"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="multiple-policy"
                            >
                                Multiple policy
                            </label>
                        </div>

                        {isPolicySelect == 1 && (
                            <form onSubmit={submitHandler}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Main title"
                                />
                                <div className="ui-add-modal-box-radio-multiple">
                                    {getMultiplePolicy.length !== 0 &&
                                        getMultiplePolicy.map((item) => {
                                            return (
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Main title"
                                                    value={item.name}
                                                />
                                            );
                                        })}
                                    <div className="ui-add-modal-box-radio-multiple-add">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Main title"
                                            onChange={multipleInputHandler}
                                            value={signleInput}
                                        />
                                        <button type="submit">
                                            <MdAdd />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                <div className="ui-add-modal-box-btn">
                    <button onClick={cancelHandler} className="ui-delete-btn">
                        Cancel
                    </button>
                    <button className="ui-edit-btn">Confirm</button>
                </div>
            </div>
        </>
    );
};

export default AddModal;
