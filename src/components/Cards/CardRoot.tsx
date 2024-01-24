import { ReactNode } from 'react';
import './styles.scss';

interface CardRootProps {
  children: ReactNode;
}

export const CardRoot = ({ children }: CardRootProps) => {
  return <div className="card_root">{children}</div>;
};
