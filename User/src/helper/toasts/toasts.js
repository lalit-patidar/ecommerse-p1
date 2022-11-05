import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";


const showToast = (msg, style, avatar) => {
    Toastify({
        text: msg,
        className: "toastify-center",
        duration: 3000,
        avatar: avatar,
        style: style,
        offset: {
            y: 60, // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
    }).showToast();
};

export default showToast;