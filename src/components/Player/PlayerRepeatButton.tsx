import { Button } from '@nextui-org/react';
import { NextIcon } from './NextIcon';

import './styles.scss';

export const PlayerRepeatButton = () => {
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
