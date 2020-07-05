import * as React from "react";
import { withKnobs, object } from "@storybook/addon-knobs";
import Article from "./Article";
import { articlePropsValue } from "./article.knobs";

const value = object("Props", articlePropsValue);

export const article = (): JSX.Element => <Article {...value} />;

export default {
  title: "Organisms|Article",
  decorators: [withKnobs],
  parameters: {
    info: { inline: true },
  },
};
