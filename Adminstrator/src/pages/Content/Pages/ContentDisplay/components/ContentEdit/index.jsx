import Footer from "../../../../../../container/Footer/footer";
import Nav from "../../../../../../container/Nav/navbar";
import "./contentedit.scss";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { useState } from "react";

const ContentEdit = () => {
    // editor state
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [isEditorSelect, setEditorSelect] = useState(false);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    return (
        <>
            <Nav />
            <div className="ui-content-edit">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="ui-content-edit-head">
                                <h4>The NichoShop Policies</h4>
                                <p>Add a new policy</p>
                            </div>
                            <div className="ui-content-edit-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <form action="">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Policy name"
                                            />
                                        </form>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={setEditorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                    />
                                </div>
                                <div className="ui-content-edit-body-btn">
                                    <button className="ui-edit-btn">
                                        List it
                                    </button>
                                    <button className="ui-back-btn">
                                        Draft for late
                                    </button>
                                    <button className="ui-delete-btn">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ContentEdit;
