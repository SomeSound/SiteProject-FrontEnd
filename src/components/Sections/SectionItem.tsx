import './styles.scss';
import { Link } from 'react-router-dom';

import './styles.scss';

interface SectionItemProps {
  name: string;
  path: string;
}

export function SectionItem({ name, path }: SectionItemProps) {
  return (
    <div className="div-section-item">
      <Link to={path}>{name}</Link>
    </div>
  );
}
