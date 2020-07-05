import * as React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { StoryFn } from "@storybook/addons";
import Header from "./Header";
import { Props } from "./Header.types";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Organisms|Header",
  decorators: [
    withKnobs,
    (storyFn: StoryFn<Props>): JSX.Element => <Router>{storyFn()}</Router>,
  ],
  parameters: {
    info: { inline: true },
  },
};

export const button = (): JSX.Element => (
  <Header auth={boolean("auth", false)} />
);
