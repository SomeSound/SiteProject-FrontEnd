import { Image } from '@nextui-org/react';
import { Card, CardContent } from '../shadcn/card';
import './styles.scss';

interface cardTrackProps {
  image: string;
  height: number;
  width: number;
}

export const CardTrack = ({ image, height, width }: cardTrackProps) => {
  return (
    <div className="card_track">
      <Card className="border-none">
        <CardContent className="flex aspect-square items-center justify-center">
          <Image
            className="object-cover"
            height={height}
            width={width}
            src={image}
          />
        </CardContent>
      </Card>
    </div>
  );
};
