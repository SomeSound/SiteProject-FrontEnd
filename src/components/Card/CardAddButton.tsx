import { HTMLAttributes } from 'react';
import { Button } from '@nextui-org/react';
import { PlusIcon } from '../Icons/PlusIcon';

import './styles.scss';

interface CardAddButtonProps extends HTMLAttributes<HTMLButtonElement> {
  event: () => void;
}

export const CardAddButton = ({ event }: CardAddButtonProps) => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10 card_add_button"
      radius="full"
      variant="light"
      onClick={event}
    >
      <PlusIcon />
    </Button>
  );
};
