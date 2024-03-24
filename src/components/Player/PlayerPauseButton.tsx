import { Button } from '@nextui-org/react';
import { PauseCircleIcon } from '../Icons/PauseCircleIcon';

import './styles.scss';
import { HTMLAttributes } from 'react';

interface PlayerPauseButtonProps extends HTMLAttributes<HTMLButtonElement> {
  event: () => void;
}

export const PlayerPauseButton = ({ event }: PlayerPauseButtonProps) => {
  return (
    <Button
      isIconOnly
      className="w-auto h-auto data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
      onClick={event}
    >
      <PauseCircleIcon size={42} />
    </Button>
  );
};
