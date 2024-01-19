import { Avatar, Link } from '@nextui-org/react';
import './styles.scss';

import './styles.scss';

interface NavbarAvatarProps {
  image: string;
  path: string;
}

export function NavbarAvatar({ image, path }: NavbarAvatarProps) {
  return (
    <div className="div-nav-avatar">
      <Avatar src={path}>{image}</Avatar>
    </div>
  );
}
