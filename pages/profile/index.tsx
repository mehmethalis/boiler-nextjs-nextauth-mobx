import {getSession, signOut} from "next-auth/client";
import {GetServerSideProps} from "next";
import {useState} from "react";
import StoreProvider from "../../utils/store.provider";

const Profile = ({session}: any) => {
    console.log(session, "session")
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
export default Profile;

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
