import { HTMLAttributes, ReactNode } from 'react';
import { CardBody } from '@nextui-org/react';
import './styles.scss';

interface PlayerBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const PlayerBody = ({ children }: PlayerBodyProps) => {
  return <CardBody>{children}</CardBody>;
};
