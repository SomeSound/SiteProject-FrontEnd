import { ReactNode } from 'react';

import './styles.scss';

interface PlaylistRootProps {
  children: ReactNode;
}

export function PlaylistRoot({ children }: PlaylistRootProps) {
  return <div className="div-playlist-root">{children}</div>;
}
