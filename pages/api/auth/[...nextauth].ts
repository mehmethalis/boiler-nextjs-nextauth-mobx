import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {NextApiRequest} from "next";
import AuthService from '../../../services/auth.service';

const providers = [
    Providers.Credentials({
        name: 'Credentials',
        authorize: async (credentials): Promise<any> => {
            const [err, response] = await AuthService.login({
                password: credentials.password,
                email: credentials.email
            }).toArray();

            if (err) {
                throw new Error(err.message)
            }
            if (response) {
                return {...response, email: credentials.email}
            } else {
                return null
            }
        }
    })
]

const callbacks = {
    // Getting the JWT token from API response
    async jwt(token: { accessToken: string, email: string }, mySession: { token: string, email: string }) {
        if (mySession) {
            token.accessToken = mySession.token
            token.email = mySession.email
        }

        return token
    },

    async session(session: { accessToken: string, user: { email: string } },
                  token: { accessToken: string, email: string }) {
        session.accessToken = token.accessToken
        session.user.email = token.email
        return session
    }
}

const options = {
    providers,
    callbacks,
}

export default (req: NextApiRequest, res: any) => NextAuth(req, res, options)

