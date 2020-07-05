import { ClickParam } from 'antd/lib/menu';

export interface Props {
  current: string;
  handleChoice: (e: ClickParam) => void | undefined;
}
