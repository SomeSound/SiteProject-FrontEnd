import { Button } from '@nextui-org/react';
import { PauseCircleIcon } from './PauseCircleIcon';

import './styles.scss';

export const PlayerPauseButton = () => {
  return (
    <Button
      isIconOnly
      className="w-auto h-auto data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
    >
      <PauseCircleIcon size={54} />
    </Button>
  );
};
