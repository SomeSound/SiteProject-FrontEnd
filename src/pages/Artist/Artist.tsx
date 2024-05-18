import { useEffect, useState } from 'react';
import { Card, CardHeader, Image } from '@nextui-org/react';
import { Label } from '../../components/Label/Label';
import { CardTrack } from '../../components/Card/CardTrack';
import { getTracksByArtistUsername } from '../../services/track';
import { TrackPageDTO } from '../../services/track/types';
import { useParams } from 'react-router-dom';
import './styles.scss';

export const Artist = () => {
  const [tracks, setTracks] = useState<TrackPageDTO>(null);
  const { artist } = useParams();

  async function handleGetTracks() {
    try {
      const response = await getTracksByArtistUsername(artist);
      setTracks(response.data);
    } catch (error) {
      console.log('Error get tracks', error);
    }
  }

  useEffect(() => {
    handleGetTracks();
  }, []);

  return (
    <div className="profile_page">
      <Card className="profile_banner" radius="none">
        <Image
          className="profile_image"
          width={150}
          height={150}
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
        />
      </Card>
      <Label>SessionStorage necessário</Label>
      <Card className="profile_tracks">
        <CardHeader>Tracks</CardHeader>
        <CardTrack data={tracks} height={50} width={50} />
      </Card>
    </div>
  );
};
