import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { getTracks } from '../../services/track';
import { useEffect, useState } from 'react';
import { TrackPageDTO } from '../../services/track/types';
import { getArtists } from '../../services/artist';
import { ArtistDTO, ArtistPageDTO } from '../../services/artist/types';

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
          <Card.Root>
            <Card.Header>Top Tracks</Card.Header>
            <Card.Track data={tracks} height={50} width={50} />
          </Card.Root>
        </div>
      </div>

      <div className="top_sections flex">
        <div className="section releases">
          <Card.Root>
            <Card.Header>Releases</Card.Header>
            <Card.Track data={tracks} height={50} width={50} />
          </Card.Root>
        </div>

        <div className="section top_artists">
          <Card.Root>
            <Card.Header>Top Artists</Card.Header>
            <Card.Artist data={artists} />
          </Card.Root>
        </div>
      </div>

      {/* <Container.Root className="recommendations">
        <Container.Header title="Recomendações" />
        <Container.Body>
        <div className="flex">
            {tracks !== null ? <CardCarouselTrack data={tracks} /> : 'lala'}
          </div>
        </Container.Body>
      </Container.Root> */}

      {/* <div className="top_sections flex">
        <Container.Root className="section albums">
          <Container.Header title="Top Albums" />
          <Container.Body>
            {tracks !== null
              ? tracks.map((item: any) => (
                  <div className="item" key={item.id}>
                    <Card.Root>
                      <Card.Track
                        image={
                          'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long'
                        }
                      />
                      <Card.Description text={item.name} />
                      <Button onClick={() => playTrackById(item.id)}>
                        Play track
                      </Button>
                    </Card.Root>
                  </div>
                ))
              : 'lala'}
          </Container.Body>
        </Container.Root>

        <Container.Root className="section records">
          <Container.Header title="Top Gravadoras" />
          <Container.Body>
            {tracks !== null
              ? tracks.map((item: any) => (
                  <div className="item" key={item.id}>
                    <Card.Root>
                      <Card.Track
                        image={
                          'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long'
                        }
                      />
                      <Card.Description text={item.name} />
                      <Button onClick={() => playTrackById(item.id)}>
                        Play track
                      </Button>
                    </Card.Root>
                  </div>
                ))
              : 'lala'}
          </Container.Body>
        </Container.Root>
      </div> */}

      {/* <Container.Root className="history">
        <Container.Header title="Histórico" />
        <Container.Body>
          <div className="flex">
            {tracks !== null ? <CardCarouselTrack data={tracks} /> : 'lala'}
          </div>
        </Container.Body>
      </Container.Root> */}
    </div>
  );
};
