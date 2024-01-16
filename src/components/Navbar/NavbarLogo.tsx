import './styles.scss';
import { Link } from 'react-router-dom';

import './styles.scss';

interface NavbarLogoProps {
  path: string;
}

export function NavbarLogo({ path }: NavbarLogoProps) {
  return (
    <div className="div-nav-logo">
      <Link to={path}>Logo Here</Link>
    </div>
  );
}
