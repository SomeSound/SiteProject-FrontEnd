import { Image } from '@nextui-org/react';
import { Card, CardContent } from '../shadcn/card';
import './styles.scss';

interface cardTrackProps {
  image: string;
}

export const CardTrack = ({ image }: cardTrackProps) => {
  return (
    <div className="card_track">
      <Card className="border-none">
        <CardContent className="flex aspect-square items-center justify-center">
          <Image
            className="object-cover"
            height={100}
            width={100}
            src={image}
          />
        </CardContent>
      </Card>
    </div>
  );
};
