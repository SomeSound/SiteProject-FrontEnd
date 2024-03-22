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

const images = [
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

const allData = [
  {
    id: '1',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '2',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '3',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '4',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '5',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '6',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '7',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '8',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '9',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '10',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '11',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '12',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
  {
    id: '13',
    image:
      'https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long',
  },
];

export const Home = () => {
  const { isOpen, onOpenChange, onClose } = useDisclosure();
  const { register, handleSubmit } = useForm();

  async function handleGetTrackByArtist() {
    try {
      const response = await getAllTracks();
      console.log(response);
    } catch (error) {
      console.log('Error get Tracks', error);
    }
  }

  async function handleSaveTrack(data: TrackDTO) {
    try {
      const response = await saveTracks('1', data);
      console.log(response);
    } catch (error) {
      console.log('Error save Tracks', error);
    }
  }

  return (
    <div className="home">
      <Modal.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Modal.Header text="Upload Track" />

        <form onSubmit={handleSubmit(handleSaveTrack)}>
          <Modal.Body rememberPass forgotPass>
            <div>
              <Input {...register('name')} type="text" placeholder="Name" />
              <Input
                {...register('duration')}
                type="text"
                placeholder="Duration"
              />
              <Input {...register('genre')} type="text" placeholder="Genre" />
              <Input {...register('image')} type="text" placeholder="Image" />
            </div>

            <Upload.Root>
              <div>
                <input type="file" {...register('file')} />
              </div>
              <div>
                <Upload.List />
              </div>
            </Upload.Root>
          </Modal.Body>
          <Modal.Footer>
            <Modal.Button
              color="success"
              variant="flat"
              text="Enviar"
              type="submit"
              onClick={() => onClose}
            />
          </Modal.Footer>
        </form>
      </Modal.Root>

      <div className="banner">
        <Banner data={images} />
      </div>

      <div className="flex">
        <Container.Root>
          <Container.Body>
            <Button onClick={handleGetTrackByArtist}>Retornar Tracks</Button>
          </Container.Body>
        </Container.Root>

        <Container.Root>
          <Container.Body>
            <Button onClick={onOpenChange}>Upload Track</Button>
          </Container.Body>
        </Container.Root>
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
                {allData.map((item, index) => (
                  <Container.Root key={index}>
                    <Container.Body>
                      <Player.Root>
                        <Player.Body>
                          <Player.Image
                            width={50}
                            shadow="md"
                            artistName="Artist Name"
                            imageUrl="https://www.adb.inf.br/ach/app01/index.php?p=digitallibrary/getfile&id=7196&preview=long"
                            trackName="Track Name"
                          />
                        </Player.Body>
                      </Player.Root>
                    </Container.Body>
                  </Container.Root>
                ))}
              </Player.Body>
            </Player.Root>
          </Container.Body>
        </Container.Root>

        <Container.Root className="section artists">
          <Container.Header title="Top Artistas" />
          <Container.Body>
            {allData.map((item, index) => (
              <div className="item" key={index}>
                <Card.Root>
                  <Card.Track image={item.image} />
                  <Card.Description text="Descrição" />
                </Card.Root>
              </div>
            ))}
          </Container.Body>
        </Container.Root>
      </div>

      <Container.Root className="recommendations">
        <Container.Header title="Recomendações" />
        <Container.Body>
          <div className="flex">
            <CardCarouselTrack data={allData} />
          </div>
        </Container.Body>
      </Container.Root>

      <div className="top_sections flex">
        <Container.Root className="section albums">
          <Container.Header title="Top Albums" />
          <Container.Body>
            {allData.map((item, index) => (
              <div className="item" key={index}>
                <Card.Root>
                  <Card.Track image={item.image} />
                  <Card.Description text="Descrição" />
                </Card.Root>
              </div>
            ))}
          </Container.Body>
        </Container.Root>

        <Container.Root className="section records">
          <Container.Header title="Top Gravadoras" />
          <Container.Body>
            {allData.map((item, index) => (
              <div className="item" key={index}>
                <Card.Root>
                  <Card.Track image={item.image} />
                  <Card.Description text="Descrição" />
                </Card.Root>
              </div>
            ))}
          </Container.Body>
        </Container.Root>
      </div>

      <Container.Root className="history">
        <Container.Header title="Histórico" />
        <Container.Body>
          <div className="flex">
            <CardCarouselTrack data={allData} />
          </div>
        </Container.Body>
      </Container.Root>
    </div>
  );
};
