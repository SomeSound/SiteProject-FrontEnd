import { ReactNode } from 'react';

import './styles.scss';

interface HeaderRootProps {
  children: ReactNode;
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return <div className="header-container"></div>;
}
