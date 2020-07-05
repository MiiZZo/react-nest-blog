import { FC } from 'react';

interface Route {
  name: string;
  path: string;
  component: FC<any>;
  exact: boolean;
}

export const routes: Route[] = [];
