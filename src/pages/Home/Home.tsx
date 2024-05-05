import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container';
import {
  getAllTracks as getAllTracks,
  getFileTrackById,
  getTrackById,
} from '../../services/track';
import { useEffect, useState } from 'react';
import { Button } from '../../components/shadcn/button';
import { useStore } from '../../store/useStore';
import { TrackDTO } from '../../services/track/types';
import { getArtists } from '../../services/artist';

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
  {
    id: '4',
    src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2745ba37867307.574eee5ce97df.jpg',
  },
  {
    id: '5',
    src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2745ba37867307.574eee5ce97df.jpg',
  },
];

export const Home = () => {
  const { setPlayTrack } = useStore();
  const [tracks, setTracks] = useState(null);
  const [artists, setArtists] = useState(null);

  async function handleGetAllTrack() {
    try {
      const response = await getAllTracks();
      setTracks(response.data.content);
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

  async function playTrackById(id: number) {
    try {
      const url = await getFileTrackById(id);
      const track = await getTrackById(id);

      const data: TrackDTO = {
        artist: {
          id: track.data.artist.id,
          username: track.data.artist.username,
          credits: track.data.artist.credits,
        },
        duration: track.data.duration,
        genre: track.data.genre,
        image: track.data.image,
        name: track.data.name,
        path: url.data,
      };

      setPlayTrack(data);
    } catch (error) {
      console.log('Error play Track', error);
    }
  }

  useEffect(() => {
    handleGetAllTrack();
  }, []);

  return (
    <div className="home">
      <div className="flex">
        <div className="banner">
          <Banner data={banner} />
        </div>
        <Container.Root className="section artists">
          <Container.Header title="Top Artistas" />
          <Container.Body>
            {artists !== null
              ? artists.map((item: any) => (
                  <div className="item" key={item.id}>
                    <Card.Root>
                      <Card.Track
                        image={
                          'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long'
                        }
                      />
                      <Card.Description text={item.name} />
                      <Button onClick={() => playTrackById(item.id)}>
                        Selecionar Track
                      </Button>
                    </Card.Root>
                  </div>
                ))
              : 'Erro ao retornar artistas'}
          </Container.Body>
        </Container.Root>
      </div>

      <div className="top_sections flex">
        {/* <Container.Root className="section musics">
          <Container.Body>
            <Player.Root>
              <Player.Body>
                <Player.Image
                  artistName="ArtistName"
                  trackName="TrackName"
                  imageUrl="https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long"
                />
                {tracks !== null
                  ? tracks.map((item: any) => (
                      <Container.Root key={item.id}>
                        <Container.Body>
                          <Player.Root>
                            <Player.Body>
                              <Player.Image
                                width={50}
                                shadow="md"
                                artistName={item.name}
                                imageUrl="https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long"
                                trackName={item.name}
                                />
                                <Button onClick={() => playTrackById(item.id)}>
                                Play track
                                </Button>
                                </Player.Body>
                                </Player.Root>
                                </Container.Body>
                                </Container.Root>
                              ))
                  : 'lala'}
              </Player.Body>
              </Player.Root>
              </Container.Body>
            </Container.Root> */}
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
