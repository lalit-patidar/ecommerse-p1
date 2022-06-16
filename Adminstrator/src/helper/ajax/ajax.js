import axios from "axios";

const ajax = async (method, url, data) => {
    return await axios(
        {
            method: method,
            url: `${process.env.REACT_APP_DOMIAN_API}${url}`,
            data: data,
        },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
};

export default ajax;
