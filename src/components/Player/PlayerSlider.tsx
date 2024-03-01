import { Slider } from '@nextui-org/react';

import './styles.scss';

export const PlayerSlider = () => {
  return (
    <>
      <Slider
        classNames={{
          track: 'bg-default-500/30',
          thumb: 'w-2 h-2 after:w-2 after:h-2 after:bg-foreground',
        }}
        color="foreground"
        defaultValue={33}
        size="sm"
      />
      <div className="flex justify-between">
        <p className="text-small">1:23 - Tempo Atual</p>
        <p className="text-small text-foreground/50">4:32 - Tempo Total</p>
      </div>
    </>
  );
};
