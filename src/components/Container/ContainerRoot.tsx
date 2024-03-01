import { HTMLAttributes, ReactNode } from 'react';
import './styles.scss';

interface ContainerRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen?: boolean;
}

export const ContainerRoot = ({
  children,
  isOpen = true,
}: ContainerRootProps) => {
  return isOpen ? <div className="root_container">{children}</div> : null;
};
