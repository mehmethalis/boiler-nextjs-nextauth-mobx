import http from "../core/helpers/base.api";

class UserService {
    verifySession = async (token: string) => {
        return await http
            .get(`http://localhost:5000/api/authenticate/verify`, {token})
            .then((res) => res.data);
    };
}

export default new UserService();