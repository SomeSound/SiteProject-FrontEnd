import { ReactNode } from 'react';

import './styles.scss';

interface NavbarItemsProps {
  children: ReactNode;
}

export function NavbarItems({ children }: NavbarItemsProps) {
  return <div className="div-navbar-items flex">{children}</div>;
}
