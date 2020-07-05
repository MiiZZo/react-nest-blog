import React from "react";
import Auth from "../../organisms/Auth/Auth";
import Header from "../../organisms/Header/Header";
import { cn } from "@bem-react/classname";
import "./Auth.scss";

const cnAuthPage = cn("AuthPage");

export default function AuthPage(): JSX.Element {
  return (
    <>
      <Header auth={false} />
      <div className={cnAuthPage("AuthPageWrapper")}>
        <Auth />
      </div>
    </>
  );
}
