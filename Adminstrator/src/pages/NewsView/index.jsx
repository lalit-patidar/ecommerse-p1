import Footer from "../../container/Footer/footer";
import Nav from "../../container/Nav/navbar";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import "./newsview.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewsView = () => {
    const navigate = useNavigate();

    const [isEdit, setEdit] = useState(false);

    // editor state
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    const [isEditorSelect, setEditorSelect] = useState(false);
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    const editHandler = () => {
        setEdit(true);
    };

    const cancelHandler = () => {
        setEdit(false);
    };

    const backHandler = () => {
        navigate("/content?tab=news");
    };

    return (
        <>
            <Nav />
            <div className="ui-display-blog-box">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="ui-display-blog-box-head">
                                <h4>News</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            {isEdit && (
                                <>
                                    <form action="">
                                        <div className="mb-3">
                                            <input
                                                type="text"
                                                className="form-control w-75"
                                                placeholder="Overwiew"
                                            />
                                        </div>
                                    </form>
                                    <Editor
                                        editorState={editorState}
                                        onEditorStateChange={setEditorState}
                                        wrapperClassName="demo-wrapper"
                                        editorClassName="demo-editor"
                                    />
                                </>
                            )}
                            {!isEdit && (
                                <>
                                    <div className="ui-display-blog-box-content">
                                        <h6>Example</h6>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five
                                            centuries, but also the leap into
                                            electronic typesetting, remaining
                                            essentially unchanged. It was
                                            popularised in the 1960s with the
                                            release of Letraset sheets
                                            containing Lorem Ipsum passages, and
                                            more recently with desktop
                                            publishing software like Aldus
                                            PageMaker including versions of
                                            Lorem Ipsum.
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five
                                            centuries, but also the leap into
                                            electronic typesetting, remaining
                                            essentially unchanged. It was
                                            popularised in the 1960s with the
                                            release of Letraset sheets
                                            containing Lorem Ipsum passages, and
                                            more recently with desktop
                                            publishing software like Aldus
                                            PageMaker including versions of
                                            Lorem Ipsum.
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever
                                            since the 1500s, when an unknown
                                            printer took a galley of type and
                                            scrambled it to make a type specimen
                                            book. It has survived not only five
                                            centuries, but also the leap into
                                            electronic typesetting, remaining
                                            essentially unchanged. It was
                                            popularised in the 1960s with the
                                            release of Letraset sheets
                                            containing Lorem Ipsum passages, and
                                            more recently with desktop
                                            publishing software like Aldus
                                            PageMaker including versions of
                                            Lorem Ipsum.
                                        </p>
                                    </div>
                                </>
                            )}
                            <div className="ui-display-blog-box-btn">
                                {isEdit ? (
                                    <>
                                        <button
                                            onClick={cancelHandler}
                                            className="ui-delete-btn"
                                        >
                                            Cancel
                                        </button>
                                        <button className="ui-edit-btn">
                                            Save
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={backHandler}
                                            className="ui-back-btn"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={editHandler}
                                            className="ui-edit-btn"
                                        >
                                            Edit
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NewsView;
