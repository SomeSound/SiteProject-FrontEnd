import { Card, CardContent } from '../shadcn/card';
import './styles.scss';
import { Label } from '../Label/Label';
import { Avatar } from '../Avatar';

interface cardArtistProps {
  image: string;
  name: string;
}

export const CardArtist = ({ image, name }: cardArtistProps) => {
  return (
    <div className="card_artist">
      <Card className="border-none">
        <CardContent className="flex aspect-square items-center justify-center">
          <Avatar.Root>
            <Avatar.User key={'la'} />
          </Avatar.Root>
          <Label>{name}</Label>
        </CardContent>
      </Card>
    </div>
  );
};
