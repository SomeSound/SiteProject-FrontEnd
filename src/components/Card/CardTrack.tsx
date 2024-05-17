import { Button, Card, Image } from '@nextui-org/react';
import { CardBody } from '@nextui-org/react';
import { useStore } from '../../store/useStore';
import { getFileTrackById } from '../../services/track';
import { Link } from 'react-router-dom';
import { TrackDTO, TrackPageDTO } from '../../services/track/types';

import './styles.scss';
import { PlusIcon } from '../Icons/PlusIcon';
import { NextIcon } from '../Icons/NextIcon';

interface cardTrackProps {
  data: TrackPageDTO;
  height: number;
  width: number;
}

export const CardTrack = ({ data, height, width }: cardTrackProps) => {
  const { setPlayTrack } = useStore();

  async function playTrackById(item: TrackDTO) {
    try {
      const url = await getFileTrackById(item.id);

      item.path = url.data;

      setPlayTrack(item);
    } catch (error) {
      console.log('Error play Track', error);
    }
  }

  async function addToPlaylist(item: TrackDTO) {
    try {
      console.log(item);
    } catch (error) {
      console.log('Error play Track', error);
    }
  }

  return (
    <div className="card_track">
      {data !== null
        ? data.tracks.map((item: TrackDTO) => (
            <Card radius="none">
              <CardBody>
                <div className="card_track_body flex">
                  <Image
                    className="object-cover"
                    height={height}
                    width={width}
                    src={item.image}
                  />
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onClick={() => addToPlaylist(item)}
                  >
                    <PlusIcon />
                  </Button>
                  <Button
                    isIconOnly
                    className="data-[hover]:bg-foreground/10"
                    radius="full"
                    variant="light"
                    onClick={() => playTrackById(item)}
                  >
                    <NextIcon />
                  </Button>
                  <div className="card_info">
                    <div>
                      <Link to={'/'}>{item.name}</Link>
                    </div>
                    <div>
                      <Link to={'/'}>{item.artist.username}</Link>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))
        : 'Erro ao retornar artistas'}
    </div>
  );
};
