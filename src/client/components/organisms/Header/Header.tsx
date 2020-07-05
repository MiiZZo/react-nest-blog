import React, { useState } from "react";
import NavMenu from "./NavMenu";
import UserDropdown from "./Dropdown";
import { Button, Input } from "antd";
import { ClickParam } from "antd/lib/menu";

import { SearchOutlined } from "@ant-design/icons";
import { cn } from "@bem-react/classname";
import { Props } from "./Header.types";

import "./Header.scss";

const cnHeader = cn("Header");
const { Search } = Input;

export default function Header(props: Props): JSX.Element {
  const { auth } = props;
  const [current, setCurrent] = useState("feed");
  const [activeSearch, setActiveSearch] = useState(false);
  const handleChoice = (e: ClickParam) => {
    setCurrent(e.key);
  };
  const handleActiveSearch = () => {
    setActiveSearch(!activeSearch);
  };

  return (
    <header className={cnHeader()}>
      <div className={cnHeader("Wrapper")}>
        {activeSearch ? (
          <Search className={cnHeader("Search")} placeholder="Поиск" />
        ) : (
          <NavMenu current={current} handleChoice={handleChoice} />
        )}
        <div className={cnHeader("UserActionsWrapper")}>
          {auth ? (
            <>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={handleActiveSearch}
              />
              <Button type="primary">Написать</Button>
              <UserDropdown />
            </>
          ) : (
            <>
              <Button
                type="primary"
                icon={<SearchOutlined />}
                onClick={handleActiveSearch}
              />
              <Button type="primary">Авторизация</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
