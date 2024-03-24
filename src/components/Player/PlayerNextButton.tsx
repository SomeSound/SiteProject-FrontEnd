import { Button } from '@nextui-org/react';
import { NextIcon } from '../Icons/NextIcon';

import './styles.scss';
import { HTMLAttributes } from 'react';

interface PlayerNextButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const PlayerNextButton = ({}: PlayerNextButtonProps) => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
    >
      <NextIcon />
    </Button>
  );
};
