/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { toastError } from "../helpers/Toast";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.interceptors.response.use(null, error => {
    const expectedErrors =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;
    if (!expectedErrors) toastError('network problem');

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    create: axios.create
};
