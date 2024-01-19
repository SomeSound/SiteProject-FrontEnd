import { ReactNode } from 'react';

import './styles.scss';

interface SectionRootProps {
  children: ReactNode;
}

export function SectionRoot({ children }: SectionRootProps) {
  return <div className="div-section-root">{children}</div>;
}
