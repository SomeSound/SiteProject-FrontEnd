import { CardBody } from '@nextui-org/react';
import { Label } from '../Label/Label';
import { Avatar } from '../Avatar';
import { ArtistDTO, ArtistPageDTO } from '../../services/artist/types';
import './styles.scss';
import { Card } from '.';

interface cardArtistProps {
  data: ArtistPageDTO;
}

export const CardArtist = ({ data }: cardArtistProps) => {
  return (
    <div className="card_artist">
      {data !== null
        ? data.artists.map((item: ArtistDTO) => (
            <Card.Root>
              <CardBody className="flex aspect-square items-center justify-center">
                <Avatar.Root>
                  <Avatar.User key={'la'} />
                </Avatar.Root>
                <Label>{item.username}</Label>
              </CardBody>
            </Card.Root>
          ))
        : 'Erro ao retornar artistas'}
    </div>
  );
};
