import { ReactNode } from 'react';
import './styles.scss';

interface ContainerHeaderProps {
  title: ReactNode;
}

export const ContainerHeader = ({ title }: ContainerHeaderProps) => {
  return <div className="header_container">{title}</div>;
};
