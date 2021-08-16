import {makeAutoObservable, runInAction} from "mobx";
import UserService from "../services/user.service";

class UserStore {
    user = null;

    constructor() {
        makeAutoObservable(this);
    }

    async verifySession(token: string) {
        const [err, response] = await UserService.verifySession(token).toArray()
        console.log(err)
        console.log(response)
        if (!err && response) {
            await runInAction(async () => {
                this.user = response.user
            })
            return true
        }
        return false
    }

}

export default new UserStore();