import { CardHeader as CardHeaderComponent } from '@nextui-org/react';
import { ReactNode } from 'react';
import './styles.scss';

interface cardHeaderProps {
  children: ReactNode;
}

export const CardHeader = ({ children }: cardHeaderProps) => {
  return (
    <div className="card_header">
      <CardHeaderComponent>{children}</CardHeaderComponent>
    </div>
  );
};
