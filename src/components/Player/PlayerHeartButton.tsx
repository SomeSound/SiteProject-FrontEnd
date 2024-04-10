import React, { HTMLAttributes } from 'react';
import { Button } from '@nextui-org/react';
import { HeartIcon } from '../Icons/HeartIcon';

import './styles.scss';

interface PlayerHeartButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const PlayerHeartButton = ({}: PlayerHeartButtonProps) => {
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
