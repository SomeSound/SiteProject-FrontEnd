import { Button } from '@nextui-org/react';

import './styles.scss';
import { ShuffleIcon } from './ShuffleIcon';
import { HTMLAttributes } from 'react';

interface PlayerShufflleButtonProps extends HTMLAttributes<HTMLButtonElement> {
  event: () => void;
}

export const PlayerShuffleButton = ({ event }: PlayerShufflleButtonProps) => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
      onClick={event}
    >
      <ShuffleIcon className="text-foreground/80" />
    </Button>
  );
};
