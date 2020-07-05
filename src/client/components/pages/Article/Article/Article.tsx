import React from "react";
import Header from "../../../organisms/Header/Header";
import Article from "../../../organisms/Article/Article";
import { Props } from "./Article.types";

export default function ArticlePage(props: Props): JSX.Element {
  return (
    <>
      <Header auth={false} />
      <div style={{ marginTop: 50 }}>
        <Article {...props.article} />
      </div>
    </>
  );
}
