import {Form, Input, Button, Checkbox} from 'antd';
import Link from 'next/link';
import styles from '../../styles/components/auth/form-register.module.scss';

const FormRegister = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className={styles.card_form}>
            <h1>Sign Up</h1>

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

                <Form.Item
                    name="confirm"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder="Confirm Password"/>
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>I have read the agreement</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item>
                    <Button type="ghost" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                    <Link href={'/auth/signin'}><a>Already have an account?</a></Link>
                </Form.Item>
            </Form>
        </div>
    )
}
export default FormRegister;