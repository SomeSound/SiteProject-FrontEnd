import { Avatar, Input, Link } from '@nextui-org/react';

import './styles.scss';

export const Navbar: React.FC = ({}) => {
  return (
    <div className="div-navbar-root">
      <div className="div-nav-logo">
        <Link href="/" color="foreground">
          Logo Here
        </Link>
      </div>
      <div className="div-nav-search">
        <Input
          label="Search"
          isClearable
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
          }}
          placeholder="Type to search..."
        ></Input>
      </div>
      <div className="div-navbar-items flex">
        <div className="div-nav-item">
          <Link href="/musics" color="foreground">
            musics
          </Link>
        </div>
        <div className="div-nav-item">
          <Link href="/artists" color="foreground">
            artists
          </Link>
        </div>
      </div>
      <div className="div-nav-avatar">
        <Avatar src="/profile" />
      </div>
    </div>
  );
};
