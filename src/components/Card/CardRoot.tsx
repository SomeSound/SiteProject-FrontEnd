import { ReactNode } from 'react';
import './styles.scss';
import { Card } from '@nextui-org/react';

interface CardRootProps {
  children: ReactNode;
}

export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="card_root">
      <Card>{children}</Card>
    </div>
  );
};
