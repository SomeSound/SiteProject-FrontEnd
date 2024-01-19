import { Container } from '../components/Container';
import { Playlist } from '../components/Playlist';
import { Section } from '../components/Sections';

import './styles.scss';

export function Home() {
  return (
    <div className="home-container flex">
      <Playlist.Root>
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
        <Playlist.Item id="1" text="Playlist" />
      </Playlist.Root>

      <div className="section-container flex">
        <Container.Root>
          <Container.Body>
            <Section.Root>
              <Section.Items>
                <Section.Item text="Techno" id="1" />
                <Section.Item text="Techno" id="1" />
                <Section.Item text="Techno" id="1" />
                <Section.Item text="Techno" id="1" />
              </Section.Items>
            </Section.Root>
          </Container.Body>
        </Container.Root>
      </div>
    </div>
  );
}
