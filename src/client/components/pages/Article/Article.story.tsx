import * as React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import Article from './Article';
import { articlePropsValue } from '../../organisms/Article/article.knobs';

export const article = (): JSX.Element => (
  <Article
    article={articlePropsValue}
  />
)

export default {
  title: "Pages|Article",
  decorators: [withKnobs],
  parameters: {
    info: { inline: true },
  }
}
