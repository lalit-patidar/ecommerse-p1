import ajax from "./ajax";

export const postRequest = (data, url) => {
    return ajax("POST", url, data);
};
