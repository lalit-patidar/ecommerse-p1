import axios from 'axios';
const API_URL = '{{base_url}}';

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

const temporary = (name) => {
    return axios
        .post(API_URL + "/admin/auth/temporary-password/request-temporary-password", {
            name
        })
        .then ((response) => {
            console.log(response)
        })
}
export default {signin, temporary};