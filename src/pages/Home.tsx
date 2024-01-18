import { Container } from '../components/Container';
import { Playlist } from '../components/Playlist';
import { Section } from '../components/Sections';
import './styles.scss';

export function Home() {
  return (
    <div className="home-container flex">
      <Container.Root>
        <Container.Body>
          <Playlist.Root>
            <Playlist.Items>
              <Playlist.Item name="Playlist 1" path="#" />
            </Playlist.Items>
          </Playlist.Root>
        </Container.Body>
      </Container.Root>

      <div className="section-container flex">
        <Container.Root>
          <Container.Body>
            <Section.Root>
              <Section.Items>
                <Section.Item name="Techno" path="/" />
                <Section.Item name="Techno" path="/" />
                <Section.Item name="Techno" path="/" />
                <Section.Item name="Techno" path="/" />
              </Section.Items>
            </Section.Root>
          </Container.Body>
        </Container.Root>
      </div>
    </div>
  );
}
