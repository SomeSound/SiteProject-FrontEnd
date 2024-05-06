import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container';
import {
  getAllTracks as getTracks,
  getFileTrackById,
} from '../../services/track';
import { useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import { TrackDTO, TrackPageDTO } from '../../services/track/types';
import { getArtists } from '../../services/artist';
import { ArtistDTO, ArtistPageDTO } from '../../services/artist/types';

import './styles.scss';
import { Button } from '@nextui-org/react';

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
  const { setPlayTrack } = useStore();
  const [tracks, setTracks] = useState<TrackPageDTO>(null);
  const [artists, setArtists] = useState<ArtistPageDTO>(null);

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

  async function playTrackById(item: TrackDTO) {
    try {
      const url = await getFileTrackById(item.id);

      const artist: ArtistDTO = {
        id: 1,
        username: 'testeFixo',
        credits: 0,
      };

      item.artist = artist;
      item.path = url.data;

      setPlayTrack(item);
    } catch (error) {
      console.log('Error play Track', error);
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

        <div className="section">
          <Container.Root>
            <Container.Header title="Top Tracks" />
            <Container.Body>
              {artists !== null
                ? tracks.tracks.map((item: TrackDTO) => (
                    <div className="track" key={item.id}>
                      <Card.Root>
                        <Card.Track
                          height={80}
                          width={80}
                          image={
                            'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long'
                          }
                        />
                        <Card.Description text={item.name} />
                        <Card.PlayButton event={() => playTrackById(item)} />
                      </Card.Root>
                    </div>
                  ))
                : 'Erro ao retornar artistas'}
            </Container.Body>
          </Container.Root>
        </div>
      </div>

      <div className="top_sections flex">
        <Container.Root className="section">
          <Container.Header title="Novos Lançamentos" />
          <Container.Body>
            {tracks !== null
              ? tracks.tracks.map((item: TrackDTO) => (
                  <div className="track" key={item.id}>
                    <Card.Root>
                      <Card.Track
                        height={90}
                        width={90}
                        image={
                          'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long'
                        }
                      />
                      <Card.Description text={item.name} />
                      <Card.PlayButton event={() => playTrackById(item)} />
                    </Card.Root>
                  </div>
                ))
              : 'Erro ao retornar artistas'}
          </Container.Body>
        </Container.Root>

        <div className="section">
          <Container.Root>
            <Container.Header title="Top Artistas" />
            <Container.Body>
              {artists !== null
                ? artists.artists.map((item: ArtistDTO) => (
                    <Card.Root key={item.id}>
                      <div className="artist">
                        <Card.Artist
                          name={item.username}
                          image={
                            'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long'
                          }
                        />
                      </div>
                    </Card.Root>
                  ))
                : 'Erro ao retornar artistas'}
            </Container.Body>
          </Container.Root>
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
