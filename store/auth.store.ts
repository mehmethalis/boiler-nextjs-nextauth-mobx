import {makeAutoObservable} from "mobx";
import {getSession, signIn} from "next-auth/client";
import StoreProvider from "../utils/store.provider";

class AuthStore {

    constructor() {
        makeAutoObservable(this);
    }

    async login(values: { email: string, password: string }) {
        const UserStore = StoreProvider.getStore('UserStore')
        const result: any = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password
        })

        if (!result.error) {
            const session: any = await getSession()
            return UserStore.verifySession(session.accessToken);
        }

        return false
    }

    // async register(values) {
    //     const [err, response] = await authAPI.register(values).toArray()
    //     console.log(err, "ERR")
    //     console.log(response, "RESSS")
    //     if (!err && response) {
    //         const UserStore = StoreProvider.getStore('UserStore')
    //         await StorageService.set('token', response)
    //         // await UserStore.verifySession()
    //         UserStore.setLogin(true)
    //     }
    //
    //     return !err
    // }
    //
    // async logout() {
    //     // const [err, response] = await authAPI.logout().toArray()
    //     // if (!err) {
    //     await StorageService.remove('token')
    //     // }
    //
    // }

}

export default new AuthStore();