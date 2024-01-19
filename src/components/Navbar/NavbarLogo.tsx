import './styles.scss';
import { Link } from '@nextui-org/react';

import './styles.scss';

interface NavbarLogoProps {
  path: string;
}

export function NavbarLogo({ path }: NavbarLogoProps) {
  return (
    <div className="div-nav-logo">
      <Link href={path} color="foreground">
        Logo Here
      </Link>
    </div>
  );
}
