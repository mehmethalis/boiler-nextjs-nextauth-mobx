import http from "../core/helpers/base.api";
import {APIEndpoint} from "../core/helpers/endpoints";

class AuthService {
    login = async (values: object) => {
        return await http
            .post(`${APIEndpoint}/authenticate/login`, values)
            .then((res) => res.data);
    };

    register = async (values: object) => {
        return await http
            .post(`${APIEndpoint}/authentication/register`, values)
            .then((res) => res.data);
    };
}

export default new AuthService();