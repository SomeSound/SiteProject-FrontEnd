import './styles.scss';
import { Link } from 'react-router-dom';

import './styles.scss';

interface PlaylistItemProps {
  name: string;
  path: string;
}

export function PlaylistItem({ name, path }: PlaylistItemProps) {
  return (
    <div className="div-playlist-item">
      <Link to={path}>{name}</Link>
    </div>
  );
}
