import { HTMLAttributes, ReactNode } from 'react';

interface ContainerBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen?: boolean;
}

export function ContainerBody({ children, isOpen = true }: ContainerBodyProps) {
  return isOpen ? <div className="body-container">{children}</div> : null;
}
