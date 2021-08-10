import FormRegister from "../../components/auth/FormRegister";
import styles from '../../styles/pages/auth/signup.module.scss';
import {GetServerSideProps} from "next";
import {getSession} from "next-auth/client";

const SignUp = () => {
    return (
        <div className={styles.container}>
            <FormRegister/>
        </div>
    )
}
export default SignUp;
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
