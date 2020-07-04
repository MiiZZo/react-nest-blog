import React from 'react';
import { cn } from '@bem-react/classname';
import { Form, Input, Button, Checkbox, AutoComplete } from 'antd';
import '../authForm.scss';

const cnSignUpForm = cn('AuthForm');

export default function SignUpForm(): JSX.Element {
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
                    label="Никнейм"
                    name="username"
                    rules={[
                        { 
                            required: true, 
                            message: 'Данное поле является обязательным',
                        },
                        {
                            min: 2,
                            max: 15,
                            message: 'Ваш Никнейм должен быть длинной от 2 до 15 символов'
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="E-mail"
                    name="email"
                    rules={[
                        { 
                            required: true, 
                            message: 'Данное поле является обязательным',
                        },
                        {
                            type: "email",
                            message: 'Введенный e-mail не является валидным'
                        }
                    ]}
                >
                    <AutoComplete />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        { 
                            required: true, 
                            message: 'Данное поле является обязательным' 
                        },
                        {
                            pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                            message: 'Хотя бы одно число, один спецсимвол, одна латинская буква в верхнем и нижнем регистре, длина не менее 6 символов'
                        }
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Пароль еще раз"
                    name="repeatPassword"
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Данное поле является обязательным',
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                            return Promise.reject('Пароли не совпадают');
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                    Есть аккаунт? <a href=''>Войти</a>
                </Form.Item>
            </div>
        </Form>
    )
}
