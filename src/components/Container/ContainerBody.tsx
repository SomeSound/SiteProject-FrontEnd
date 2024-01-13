import { ReactNode } from 'react';

import './styles.scss';

interface ContainerBodyProps {
  children: ReactNode;
  isOpen?: boolean;
}

export function ContainerBody({ children, isOpen = true }: ContainerBodyProps) {
  return isOpen ? <div className="body-container">{children}</div> : null;
}
