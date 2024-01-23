import { Container } from '../components/Container';
import { Section } from '../components/Sections';

import './styles.scss';

const sections = ['Techno', 'Hard', 'Acid', 'Rave', 'Prytrance', 'DarkPsy'];
const artists = [
  'ARTIST 1',
  'ARTIST 2',
  'ARTIST 3',
  'ARTIST 4',
  'ARTIST 5',
  'ARTIST 6',
];
const musics = [
  'MUSIC 1',
  'MUSIC 2',
  'MUSIC 3',
  'MUSIC 4',
  'MUSIC 5',
  'MUSIC 6',
];

export function Home() {
  return (
    <Container.Root>
      <Container.Body>BANNER</Container.Body>
      <Container.Body>
        <div className="top-section flex">
          <div className="top-musics">
            <Container.Root>
              <Container.Body>
                {musics.map((music) => (
                  <div className="">{music}</div>
                ))}
              </Container.Body>
            </Container.Root>
          </div>

          <div className="top-artists">
            <Container.Root>
              <Container.Body>
                {artists.map((artist) => (
                  <div className="">{artist}</div>
                ))}
              </Container.Body>
            </Container.Root>
          </div>
        </div>
      </Container.Body>
    </Container.Root>
  );
}
