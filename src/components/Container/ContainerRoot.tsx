import { HTMLAttributes, ReactNode } from 'react';

interface ContainerRootProps {
  children: ReactNode;
}

export function ContainerRoot({ children }: ContainerRootProps) {
  return <div className="root-container">{children}</div>;
}
