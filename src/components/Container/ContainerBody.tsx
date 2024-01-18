import { ReactNode } from 'react';

interface ContainerBodyProps {
  children: ReactNode;
  isOpen?: boolean;
}

export function ContainerBody({ children, isOpen = true }: ContainerBodyProps) {
  return isOpen ? <div className="body-container">{children}</div> : null;
}
