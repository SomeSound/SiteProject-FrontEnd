import { Image } from '@nextui-org/react';
import { HTMLAttributes } from 'react';

import './styles.scss';

interface PlayerImageProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  trackName: string;
  artistName: string;
  width?: number;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

export const PlayerImage = ({
  imageUrl,
  trackName,
  artistName,
  width = 100,
  shadow = 'none',
}: PlayerImageProps) => {
  return (
    <div className="flex">
      <Image
        className="object-cover"
        shadow={shadow}
        src={imageUrl}
        width={width}
      />
      <div className="info">
        <h1 className="text-large font-medium mt-1">{trackName}</h1>
        <p className="text-small text-foreground/80">{artistName}</p>
      </div>
    </div>
  );
};
