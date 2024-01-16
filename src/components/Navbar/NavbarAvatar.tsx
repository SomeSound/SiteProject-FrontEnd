import './styles.scss';
import { Link } from 'react-router-dom';

import './styles.scss';

interface NavbarAvatarProps {
  image: string;
  path: string;
}

export function NavbarAvatar({ image, path }: NavbarAvatarProps) {
  return (
    <div className="div-nav-avatar">
      <Link to={path}>{image}</Link>
    </div>
  );
}
