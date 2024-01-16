import './styles.scss';
import { Link } from 'react-router-dom';

import './styles.scss';

interface NavbarItemProps {
  text: string;
  path: string;
}

export function NavbarItem({ text, path }: NavbarItemProps) {
  return (
    <div className="div-nav-item">
      <Link to={path}>{text}</Link>
    </div>
  );
}
