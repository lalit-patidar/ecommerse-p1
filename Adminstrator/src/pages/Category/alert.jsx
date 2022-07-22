import React, { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Alert = (props) => {
    return (
        <ToastContainer className="p-3" position={'top-end'}>
            <Toast show={props.showA} onClose={props.toggleShowA} delay={3000} autohide>
            <Toast.Header>
                <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
                />
                <strong className="me-auto">{props.title}</strong>
                {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>{props.msg}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
};
export default Alert;
