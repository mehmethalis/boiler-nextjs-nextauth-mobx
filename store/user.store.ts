import {makeAutoObservable, runInAction} from "mobx";
import UserService from "../services/user.service";

class UserStore {
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    async verifySession(token: string) {
        const [err, response] = await UserService.verifySession(token).toArray()

        if (!err && response) {
            await runInAction(async () => {
                this.user = response
            })
            return true
        }
        return false
    }

}

export default new UserStore();