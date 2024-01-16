import './styles.scss';
import { Link } from 'react-router-dom';

import './styles.scss';

interface NavbarSearchProps {
  text: string;
  path: string;
}

export function NavbarSearch({ text, path }: NavbarSearchProps) {
  return (
    <div className="div-nav-search">
      <Link to={path}>{text}</Link>
    </div>
  );
}
