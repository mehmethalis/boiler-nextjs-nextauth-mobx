import axios from "axios";

const _http = axios;

class BaseAPI {
    _getHttpClient = () => {
        return _http;
    };

    get = (url: string, params?: object | null, headers?: object | null) => {
        return _http.get(url, {params, headers});
    };

    post = (url: string, body: object | null, headers?: object | null) => {
        return _http.post(url, body, {headers});
    };

    put = (url: string, body: object | null, headers: object | null) => {
        return _http.put(url, body, {headers});
    };

    patch = (url: string, body: object | null, headers: object | null) => {
        return _http.patch(url, body, {headers});
    };

    delete = (url: string, params: object | null, headers: object | null) => {
        return _http.delete(url, {params, headers});
    };
}

const http = new BaseAPI();
export default http;