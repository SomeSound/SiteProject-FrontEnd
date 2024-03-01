import { Button } from '@nextui-org/react';
import { PreviousIcon } from '../Icons/PreviousIcon';

import './styles.scss';

export const PlayerPreviousButton = () => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
    >
      <PreviousIcon />
    </Button>
  );
};
