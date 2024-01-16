import { ReactNode } from 'react';

import './styles.scss';

interface PlaylistItemsProps {
  children: ReactNode;
}

export function PlaylistItems({ children }: PlaylistItemsProps) {
  return <div className="div-playlist-items">{children}</div>;
}
