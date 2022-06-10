import axios from 'axios';
const API_URL = 'https://nichoshop.com/api/v1';

const signin = (login, password, grecaptcha) => {
    return axios
        .post(API_URL + "/admin/auth/login-with-prompt", {
            login,
            password,
            grecaptcha,
        })
        .then ((response) => {
            console.log(response)
        })
}

const temporary = (username) => {
    console.log(username);
    return axios
        .post(API_URL + "/admin/auth/temporary-password/request-temporary-password", {
            username
        })
        .then ((response) => {
            console.log(response)
        })
}
export default {signin, temporary};