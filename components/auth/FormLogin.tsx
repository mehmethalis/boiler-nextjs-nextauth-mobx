import {Form, Input, Button, Checkbox} from "antd";
import Link from 'next/link';
import styles from '../../styles/components/auth/form-login.module.scss';
import {useState} from "react";
import {useRouter} from "next/router";
import StoreProvider from "../../utils/store.provider";
import {observer} from "mobx-react-lite";

const FormLogin = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onFinish = async (values: { email: string, password: string }) => {
        setLoading(true)
        const AuthStore = StoreProvider.getStore('AuthStore')
        const isConfirmed = await AuthStore.login(values)
        setLoading(false)
        if (isConfirmed) {
            await router.replace('/profile');
        }
    };

    return (
        <div className={styles.card_form}>
            <h1>Sign In</h1>

            <Form
                name="normal_login"
                className={styles.form}
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="email"
                    rules={[{required: true, type: 'email', message: 'Please input your Email!'}]}
                >
                    <Input placeholder="E-Mail"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Password"/>
                </Form.Item>


                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Link href={'/auth/signin'}><a>Forgot Password</a></Link>
                </Form.Item>

                <Form.Item>
                    <Button loading={loading} type="ghost" htmlType="submit" className="login-form-button">
                        Login
                    </Button>
                    <Link href={'/auth/signup'}><a>Do not have an account ?</a></Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default observer(FormLogin);