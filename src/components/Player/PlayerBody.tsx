import { ReactNode } from 'react';
import { CardBody } from '@nextui-org/react';
import './styles.scss';

interface PlayerBodyProps {
  children: ReactNode;
}

export const PlayerBody = ({ children }: PlayerBodyProps) => {
  return (
    <CardBody>
      <div className="items-center justify-center flex">{children}</div>
    </CardBody>
  );
};
