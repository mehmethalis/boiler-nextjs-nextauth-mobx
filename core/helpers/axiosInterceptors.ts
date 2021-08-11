import http from "./base.api";

const interceptors = http._getHttpClient().interceptors;

//for request
interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

//for response
interceptors.response.use((response) => response.data, (error) => {
    return Promise.reject(error);
});

export default interceptors