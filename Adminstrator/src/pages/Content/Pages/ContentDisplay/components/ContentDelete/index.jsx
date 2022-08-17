import "./contentdelete.scss";

const ContentDelete = ({ canHandler, delHandler }) => {
    return (
        <>
            <div className="ui-content-delete">
                <h4>Confirm your delete</h4>
                <p>
                    Are you sure you wan to delete <br /> ‘Example of the
                    policy’ name policy?
                </p>
                <div className="ui-content-delete-btn">
                    <button onClick={canHandler} className="ui-delete-btn">
                        Cancel
                    </button>
                    <button onClick={delHandler} className="ui-edit-btn">
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default ContentDelete;
