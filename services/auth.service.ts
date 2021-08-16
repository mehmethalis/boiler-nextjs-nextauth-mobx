import http from "../core/helpers/base.api";

class AuthService {
    login = async (values: object) => {
        return await http
            .post(`${process.env.BASE_API_URI}/authenticate/login`, values)
            .then((res) => res.data);
    };

    register = async (values: object) => {
        return await http
            .post(`${process.env.BASE_API_URI}/authentication/register`, values)
            .then((res) => res.data);
    };
}

export default new AuthService();