import React from 'react';
import { Form, Input, Button, AutoComplete, Checkbox } from 'antd';
import { cn } from '@bem-react/classname';
import '../authForm.scss';

const cnSignUpForm = cn('AuthForm');

export default function SignInForm(): JSX.Element {
    const onFinish = (values: unknown) => {
        console.log(values);
    }
    const onFinishFailed = (errorInfo: unknown) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <Form
            layout='vertical'
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div className={cnSignUpForm('Wrapper')}>
                <Form.Item
                    label="E-mail"
                    name="username"
                    rules={[{ required: true, message: 'Введите e-mail' }]}
                >
                    <AutoComplete />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Запомнить меня</Checkbox>
                    <a className={cnSignUpForm('ForgotPasswordLink')} href=''>Забыли пароль?</a>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )
}
