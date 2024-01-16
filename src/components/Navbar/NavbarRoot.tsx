import { ReactNode } from 'react';

import './styles.scss';

interface NavbarRootProps {
  children: ReactNode;
}

export function NavbarRoot({ children }: NavbarRootProps) {
  return <div className="div-navbar-root">{children}</div>;
}
