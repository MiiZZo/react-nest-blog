import React from 'react';
import { Input, Form, Button, Tag, Select, Typography } from 'antd';
import { cn } from '@bem-react/classname';
import Editor from '../../../organisms/Editor/Editor';
import Header from '../../../organisms/Header/Header';
import './CreateArticle.scss';

const cnCreateArticle = cn('CreateArticle');
const { Title } = Typography;

export default function CreateArticle(): JSX.Element {
    const onFinish = (values: unknown) => {
        console.log(values);
    }

    const onFinishFailed = (errorInfo: unknown) => {
        console.log(errorInfo);
    }

    return (
        <>
            <Header auth={true}/>
            <Form
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div className={cnCreateArticle('Container')}>
                    <div className={cnCreateArticle('Wrapper')}>
                        <Form.Item
                            name="title"
                            label="Название статьи"
                            rules={[{ required: true, message: "Укажите название статьи" }]}
                        >
                            <Input className={cnCreateArticle('Input')} />
                        </Form.Item>
                        <Title level={4}>
                            Здесь напишите превью-контент вашей статьи
                            (его пользователи будут видеть перед тем, 
                            как перейдет к вашей статье)
                        </Title>
                        <Editor />
                        <Title level={4}>Основной контент вашей статьи (будет совмещен с превью-контентом)</Title>
                        <Editor />
                        <Form.Item
                            name="tags"
                            label="Введите от 1 до 5 тегов"
                            rules={[{ required: true, message: "Укажите хотя бы один тег" }]}
                        >
                            {/*eslint-disable-next-line react/prop-types*/}
                            <Select mode="tags" tagRender={(props) => <Tag color="gold" {...props}>{ props.value }</Tag>}>
                               
                            </Select>
                        </Form.Item>
                        <Button block htmlType="submit" type="primary">Отправить на проверку модерации</Button>
                    </div>
                </div>
            </Form>
            
        </>
    )
}
