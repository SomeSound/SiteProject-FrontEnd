import './styles.scss';
import { Link } from '@nextui-org/react';

import './styles.scss';

interface NavbarItemProps {
  text: string;
  path: string;
}

export function NavbarItem({ text, path }: NavbarItemProps) {
  return (
    <div className="div-nav-item">
      <Link href={path} color="foreground">
        {text}
      </Link>
    </div>
  );
}
