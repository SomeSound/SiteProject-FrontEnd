import { Button } from '@nextui-org/react';
import { RepeatOneIcon } from '../Icons/RepeatOneIcon';

import './styles.scss';

export const PlayerRepeatButton = () => {
  return (
    <Button
      isIconOnly
      className="data-[hover]:bg-foreground/10"
      radius="full"
      variant="light"
    >
      <RepeatOneIcon className="text-foreground/80" />
    </Button>
  );
};
