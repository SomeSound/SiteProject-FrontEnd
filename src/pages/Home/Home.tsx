import { Banner } from '../../components/Banner/Banner';
import { getTracks } from '../../services/track';
import { useEffect, useState } from 'react';
import { TrackPageDTO } from '../../services/track/types';
import { getArtists } from '../../services/artist';
import { ArtistPageDTO } from '../../services/artist/types';
import { Card, CardHeader } from '@nextui-org/react';
import { CardTrack } from '../../components/Card/CardTrack';
import { CardArtist } from '../../components/Card/CardArtist';

import './styles.scss';

const banner = [
  {
    id: '1',
    src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2745ba37867307.574eee5ce97df.jpg',
  },
  {
    id: '2',
    src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2745ba37867307.574eee5ce97df.jpg',
  },
  {
    id: '3',
    src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2745ba37867307.574eee5ce97df.jpg',
  },
];

export const Home = () => {
  const [artists, setArtists] = useState<ArtistPageDTO>(null);
  const [tracks, setTracks] = useState<TrackPageDTO>(null);

  async function handleGetTracks() {
    try {
      const response = await getTracks();
      setTracks(response.data);
    } catch (error) {
      console.log('Error get tracks', error);
    }
  }

  async function handleGetArtists() {
    try {
      const response = await getArtists();
      setArtists(response.data);
    } catch (error) {
      console.log('Error get artists', error);
    }
  }

  useEffect(() => {
    handleGetTracks();
    handleGetArtists();
  }, []);

  return (
    <div className="home">
      <div className="flex">
        <Banner data={banner} />

        <div className="section top_tracks">
          <Card>
            <CardHeader>Top Tracks</CardHeader>
            <CardTrack data={tracks} height={50} width={50} />
          </Card>
        </div>
      </div>

      <div className="top_sections flex">
        <div className="section releases">
          <Card>
            <CardHeader>Releases</CardHeader>
            <CardTrack data={tracks} height={50} width={50} />
          </Card>
        </div>

        <div className="section top_artists">
          <Card>
            <CardHeader>Top Artists</CardHeader>
            <CardArtist data={artists} />
          </Card>
        </div>
      </div>
    </div>
  );
};
