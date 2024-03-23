import { Input, useDisclosure } from '@nextui-org/react';
import { Banner } from '../components/Banner/Banner';
import { Card } from '../components/Card/Card';
import { CardCarouselTrack } from '../components/Card/CardCarouselTrack';
import { Container } from '../components/Container';
import { Player } from '../components/Player';
import { Button } from '../components/shadcn/button';
import { getAllTracks as getAllTracks, saveTracks } from '../services/track';
import { Modal } from '../components/Modal';
import { Upload } from '../components/Upload';
import { useForm } from 'react-hook-form';
import { TrackDTO } from '../services/track/types';

import './styles.scss';
import { useEffect, useState } from 'react';

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
  const { isOpen, onOpenChange, onClose } = useDisclosure();
  const [tracks, setTracks] = useState(null);

  async function handleGetAllTrack() {
    try {
      const response = await getAllTracks();
      setTracks(response.data.musicDataList);
      console.log(response.data.musicDataList);
    } catch (error) {
      console.log('Error get Tracks', error);
    }
  }

  useEffect(() => {
    handleGetAllTrack();
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <Banner data={banner} />
      </div>

      <div className="top_sections flex">
        <Container.Root className="section musics">
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
                            </Player.Body>
                          </Player.Root>
                        </Container.Body>
                      </Container.Root>
                    ))
                  : 'lala'}
              </Player.Body>
            </Player.Root>
          </Container.Body>
        </Container.Root>

        <Container.Root className="section artists">
          <Container.Header title="Top Artistas" />
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
                    </Card.Root>
                  </div>
                ))
              : 'lala'}
          </Container.Body>
        </Container.Root>
      </div>

      {/* <Container.Root className="recommendations">
        <Container.Header title="Recomendações" />
        <Container.Body>
          <div className="flex">
            {tracks !== null ? <CardCarouselTrack data={tracks} /> : 'lala'}
          </div>
        </Container.Body>
      </Container.Root> */}

      <div className="top_sections flex">
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
                    </Card.Root>
                  </div>
                ))
              : 'lala'}
          </Container.Body>
        </Container.Root>
      </div>

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
