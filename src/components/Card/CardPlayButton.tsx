import { HTMLAttributes } from 'react';
import { NextIcon } from '../Icons/NextIcon';
import { Button } from '@nextui-org/react';

import './styles.scss';

interface CardPlayButtonProps extends HTMLAttributes<HTMLButtonElement> {
  event: () => void;
}

export const CardPlayButton = ({ event }: CardPlayButtonProps) => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10 card_play_button"
      radius="full"
      variant="light"
      onClick={event}
    >
      <NextIcon />
    </Button>
  );
};
