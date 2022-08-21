import Nav from "../../container/Nav/navbar";
import "./careeraddcart.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CareerAddCat = () => {
    const [isSelectCat, setSelectCat] = useState(false);

    const navigate = useNavigate();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const cancelHandler = () => navigate("/content?tab=careers");

    const [isEditorSelect, setEditorSelect] = useState(false);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    const addJobHandler = () => {
        setSelectCat(!isSelectCat);
    };
    return (
        <>
            <Nav />
            <div className="ui-career-add-cat-box">
                <div className="container">
                    <div className="ui-news-box-head">
                        <h2>Careers at NichoShop</h2>
                    </div>
                    <div className="ui-career-add-cat-box-head">
                        <button onClick={addJobHandler}>
                            Add a new job category
                        </button>
                    </div>
                    {isSelectCat && (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ui-career-add-cat-box-form">
                                    <div className="row justify-content-between">
                                        <div className="col-lg-5">
                                            <div className="mb-3">
                                                <label>Job category:</label>
                                                <select className="form-select">
                                                    <option value="">
                                                        Choose category
                                                    </option>
                                                    <option value="">
                                                        NichoShop Design 1
                                                    </option>
                                                    <option value="">
                                                        NichoShop Design 2
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label>Job type:</label>
                                                <select className="form-select">
                                                    <option selected value="">
                                                        Choose type
                                                    </option>
                                                    <option value="">
                                                        NichoShop Design 1
                                                    </option>
                                                    <option value="">
                                                        NichoShop Design 2
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label>Location:</label>
                                                <select className="form-select">
                                                    <option selected value="">
                                                        Choose country
                                                    </option>
                                                    <option value="">
                                                        Bangladesh
                                                    </option>
                                                    <option value="">
                                                        Saudi arab
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label>Category:</label>
                                                <select className="form-select">
                                                    <option selected value="">
                                                        Choose a category
                                                    </option>
                                                    <option value="">
                                                        Cat 1
                                                    </option>
                                                    <option value="">
                                                        Cat 2
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="mb-3">
                                                <label>Job title:</label>
                                                <select className="form-select">
                                                    <option selected value="">
                                                        Job title
                                                    </option>
                                                    <option value="">
                                                        Cat 1
                                                    </option>
                                                    <option value="">
                                                        Cat 2
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 line">
                                            <div>
                                                <label>Hidden comment</label>
                                                <textarea
                                                    className="form-control w-100"
                                                    name=""
                                                    id=""
                                                    cols="30"
                                                    rows="10"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ui-career-add-cat-box-editor">
                                <form className="mt-5">
                                    <input
                                        type="text"
                                        className="form-control w-75 mb-3"
                                        placeholder="Job category name"
                                    />
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={setEditorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                    />
                                </form>
                                <div className="ui-career-add-cat-box-editor-btn">
                                    <button
                                        onClick={cancelHandler}
                                        className="ui-delete-btn"
                                    >
                                        Cancel
                                    </button>
                                    <button className="ui-edit-btn ms-3">
                                        List it
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CareerAddCat;
