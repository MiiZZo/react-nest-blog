import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Props } from './NavMenu.types';

export default function NavMenu(props: Props): JSX.Element {
    const {
        handleChoice,
        current
    } = props;
    
    return (
        <nav>
            <Menu onClick={handleChoice} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="feed">
                    <Link to="/">
                        Моя лента
                    </Link>
                </Menu.Item>
                <Menu.Item key="top">
                    <Link to="/top">
                        Все потоки
                    </Link>
                </Menu.Item>
                <Menu.Item key="development">
                    <Link to="/flows/development">
                        Разработка
                    </Link>
                </Menu.Item>
                <Menu.Item key="admin">
                    <Link to="/flows/admin">
                        Администрирование
                    </Link>
                </Menu.Item>
                <Menu.Item key="design">
                    <Link to="/flows/design">
                        Дизайн
                    </Link>
                </Menu.Item>
                <Menu.Item key="management">
                    <Link to="/flows/management">
                        Менеджмент
                    </Link>
                </Menu.Item>
                <Menu.Item key="marketing">
                    <Link to="/flows/marketing">
                        Маркетинг
                    </Link>
                </Menu.Item>
            </Menu>
        </nav>
    )
}
