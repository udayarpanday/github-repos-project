import axios from 'axios';

const API = axios.create({
    baseURL: '',
    timeout: 50000
});

axios.defaults.baseURL = '';

API.defaults.headers.get["Accept"] = "application/json";
API.defaults.headers.post["Accept"] = "application/json";
API.defaults.headers.post["Content-Type"] = "application/json";


API.interceptors.response.use(
    (response) => responseSuccessHandler(response),
    (error) => responseErrorHandler(error)
);

const responseSuccessHandler = (response: any) => {
    return response;
};

const responseErrorHandler = (error: any) => {
    return Promise.reject(error);
};

export default API;
