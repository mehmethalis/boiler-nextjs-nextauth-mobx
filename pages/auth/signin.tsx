import FormLogin from "../../components/auth/FormLogin";
import styles from '../../styles/pages/auth/signin.module.scss';
import {GetServerSideProps} from "next";
import {getSession} from "next-auth/client";

const SignIn = () => {
    return (
        <div className={styles.container}>
            <FormLogin/>
        </div>
    )
}
export default SignIn;
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    } else {
        return {
            props: {session}
        }
    }
}
