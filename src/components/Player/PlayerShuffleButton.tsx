import { Button } from '@nextui-org/react';

import './styles.scss';
import { ShuffleIcon } from './ShuffleIcon';

export const PlayerShuffleButton = () => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
    >
      <ShuffleIcon className="text-foreground/80" />
    </Button>
  );
};
