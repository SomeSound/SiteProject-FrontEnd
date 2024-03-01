import { Image } from '@nextui-org/react';
import { HTMLAttributes } from 'react';

import './styles.scss';

interface PlayerImageProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  trackName: string;
  artistName: string;
}

export const PlayerImage = ({
  imageUrl,
  trackName,
  artistName,
}: PlayerImageProps) => {
  return (
    <div className="flex">
      <Image className="object-cover" shadow="md" src={imageUrl} width={100} />
      <div className="flex flex-col gap-0 info">
        <h1 className="text-large font-medium mt-1">{trackName}</h1>
        <p className="text-small text-foreground/80">{artistName}</p>
      </div>
    </div>
  );
};
