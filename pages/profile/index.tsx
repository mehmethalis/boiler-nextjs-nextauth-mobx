import {getSession, signOut} from "next-auth/client";
import {GetServerSideProps} from "next";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {useStore} from '../../store'

const Profile = ({session}: any) => {
    const {UserStore}: any = useStore()
    console.log(session, "session")
    console.log(UserStore.user, '----------')
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        setLoading(true)
        await signOut();
        setLoading(false)
    }

    return (
        <div>
            <h1>Here Profile Page</h1>
            <span onClick={logout}><a>Logout</a></span>
            {loading && <h1>Loading...</h1>}
        </div>
    )
}
export default observer(Profile);

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false
            }
        }
    } else {
        return {
            props: {session}
        }
    }
}
