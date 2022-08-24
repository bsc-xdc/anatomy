import { ReactNode } from 'react';

interface Props {
  heading: string;
  children: ReactNode;
}

const AccordionPanel = ({ children }: Props): JSX.Element => {
  return <>{children}</>;
}

export default AccordionPanel;