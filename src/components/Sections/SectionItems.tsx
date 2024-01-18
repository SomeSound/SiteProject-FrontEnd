import { ReactNode } from 'react';

import './styles.scss';

interface SectionItemsProps {
  children: ReactNode;
}

export function SectionItems({ children }: SectionItemsProps) {
  return <div className="div-section-items">{children}</div>;
}
