import { HTMLAttributes } from 'react';
import { NextIcon } from '../Icons/NextIcon';
import './styles.scss';
import { Button } from '@nextui-org/react';

interface CardPlayButtonProps extends HTMLAttributes<HTMLButtonElement> {
  event: () => void;
}

export const CardPlayButton = ({ event }: CardPlayButtonProps) => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
      onClick={event}
    >
      <NextIcon />
    </Button>
  );
};
