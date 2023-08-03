/* eslint-disable react/no-unused-prop-types */
import { ReactNode } from 'react';

interface Props {
  heading: string;
  stoplightColor?: 'red' | 'yellow' | 'green';
  children: ReactNode;
}

const AccordionPanel = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
};

export default AccordionPanel;