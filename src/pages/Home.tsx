import { Banner } from '../components/Banner/Banner';
import { Card } from '../components/Cards/Card';
import { CardSliderTrack } from '../components/Cards/CardSliderTrack';
import { Container } from '../components/Container';

import './styles.scss';

const sections = ['Techno', 'Hard', 'Acid', 'Rave', 'Prytrance', 'DarkPsy'];
const artists = [
  'ARTIST 1',
  'ARTIST 2',
  'ARTIST 3',
  'ARTIST 4',
  'ARTIST 5',
  'ARTIST 6',
  'ARTIST 7',
  'ARTIST 8',
  'ARTIST 9',
  'ARTIST 10',
];
const musics = [
  'MUSIC 1',
  'MUSIC 2',
  'MUSIC 3',
  'MUSIC 4',
  'MUSIC 5',
  'MUSIC 6',
  'MUSIC 7',
  'MUSIC 8',
  'MUSIC 9',
  'MUSIC 10',
];

const albums = [
  'ALBUM 1',
  'ALBUM 2',
  'ALBUM 3',
  'ALBUM 4',
  'ALBUM 5',
  'ALBUM 6',
  'ALBUM 7',
  'ALBUM 8',
  'ALBUM 9',
  'ALBUM 10',
];

const records = [
  'RECORD 1',
  'RECORD 2',
  'RECORD 3',
  'RECORD 4',
  'RECORD 5',
  'RECORD 6',
  'RECORD 7',
  'RECORD 8',
  'RECORD 9',
  'RECORD 10',
];

const history = [
  'HISTORY 1',
  'HISTORY 2',
  'HISTORY 3',
  'HISTORY 4',
  'HISTORY 5',
  'HISTORY 6',
  'HISTORY 7',
];

const recommendations = [
  'RECOMMENDATION 1',
  'RECOMMENDATION 2',
  'RECOMMENDATION 3',
  'RECOMMENDATION 4',
  'RECOMMENDATION 5',
  'RECOMMENDATION 6',
  'RECOMMENDATION 7',
];

const images = [
  {
    id: '1',
    src: 'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg',
  },
  {
    id: '2',
    src: 'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg',
  },
  {
    id: '3',
    src: 'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg',
  },
  {
    id: '4',
    src: 'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg',
  },
  {
    id: '5',
    src: 'https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg',
  },
];

const musicsSlider = [
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

export function Home() {
  return (
    <div className="home">
      <div className="banner">
        <Banner data={images} />
      </div>

      <div className="recommendations">
        <Container.Root>
          <Container.Header title="Recomendações" />
          <Container.Body>
            <div className="flex">
              {/* <CardSliderTrack data={musicsSlider} /> */}
            </div>
          </Container.Body>
        </Container.Root>
      </div>

      <div className="top_sections flex">
        <div className="section musics">
          <Container.Root>
            <Container.Header title="Top Músicas" />
            <Container.Body>
              {musics.map((item, index) => (
                <div className="item" key={index}>
                  <Card.Root>
                    <Card.Track />
                    <Card.Description text="Descrição" />
                  </Card.Root>
                </div>
              ))}
            </Container.Body>
          </Container.Root>
        </div>

        <div className="section artists">
          <Container.Root>
            <Container.Header title="Top Artistas" />
            <Container.Body>
              {artists.map((item, index) => (
                <div className="item" key={index}>
                  <Card.Root>
                    <Card.Track />
                    <Card.Description text="Descrição" />
                  </Card.Root>
                </div>
              ))}
            </Container.Body>
          </Container.Root>
        </div>

        <div className="section albums">
          <Container.Root>
            <Container.Header title="Top Albums" />
            <Container.Body>
              {albums.map((item, index) => (
                <div className="item" key={index}>
                  <Card.Root>
                    <Card.Track />
                    <Card.Description text="Descrição" />
                  </Card.Root>
                </div>
              ))}
            </Container.Body>
          </Container.Root>
        </div>

        <div className="section records">
          <Container.Root>
            <Container.Header title="Top Gravadoras" />
            <Container.Body>
              {records.map((record, index) => (
                <div className="item" key={index}>
                  <Card.Root>
                    <Card.Track />
                    <Card.Description text="Descrição" />
                  </Card.Root>
                </div>
              ))}
            </Container.Body>
          </Container.Root>
        </div>
      </div>

      <div className="history">
        <Container.Root>
          <Container.Header title="Histórico" />
          <Container.Body>
            <div className="flex">
              {/* <CardSliderTrack data={musicsSlider} /> */}
            </div>
          </Container.Body>
        </Container.Root>
      </div>
    </div>
  );
}
