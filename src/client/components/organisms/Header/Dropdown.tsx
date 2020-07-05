import React from "react";
import { Menu, Dropdown as DropdownComponent, Button } from "antd";
import {
  ProfileOutlined,
  NotificationOutlined,
  BookOutlined,
  FormOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function DropDown(): JSX.Element {
  const DropDownMenu: JSX.Element = (
    <Menu mode="vertical">
      <Menu.Item>
        <Link to="/user">
          <ProfileOutlined /> Профиль
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/bookmarks">
          <BookOutlined /> Закладки
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/notifications">
          <NotificationOutlined /> Уведомления
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/draft">
          <FormOutlined /> Черновик
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">
          <SettingOutlined /> Настройки
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <DropdownComponent overlay={DropDownMenu} placement="bottomRight">
      <Button type="primary" icon={<UserOutlined />} />
    </DropdownComponent>
  );
}
