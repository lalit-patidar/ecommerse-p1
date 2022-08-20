import Nav from "../../container/Nav/navbar";
import "./careeraddcart.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CareerAddCat = () => {
    const navigate = useNavigate();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const cancelHandler = () => navigate("/content?tab=careers");

    const [isEditorSelect, setEditorSelect] = useState(false);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
        <>
            <Nav />
            <div className="ui-career-add-cat-box">
                <div className="container">
                    <div className="ui-news-box-head">
                        <h2>Careers at NichoShop</h2>
                    </div>
                    <div className="ui-career-add-cat-box-head">
                        <p>Add a new job category</p>
                    </div>
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
