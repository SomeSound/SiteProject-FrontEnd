import React from 'react';
import { Button } from '@nextui-org/react';

import './styles.scss';
import { HeartIcon } from './HeartIcon';

export const PlayerHeartButton = () => {
  const [liked, setLiked] = React.useState(false);

  return (
    <Button
      isIconOnly
      className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
      radius="full"
      variant="light"
      onPress={() => setLiked((v) => !v)}
    >
      <HeartIcon
        className={liked ? '[&>path]:stroke-transparent' : ''}
        fill={liked ? 'currentColor' : 'none'}
      />
    </Button>
  );
};
