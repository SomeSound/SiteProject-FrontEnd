import { ReactNode } from 'react';
import './styles.scss';

interface ContainerBodyProps {
  children: ReactNode;
}

export const ContainerBody = ({ children }: ContainerBodyProps) => {
  return <div className="body_container">{children}</div>;
};
