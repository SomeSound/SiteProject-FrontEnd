import { Container } from '../components/Container';
import { Navbar } from '../components/Navbar';
import { Playlist } from '../components/Playlist';
import { Section } from '../components/Sections';
import './styles.scss';

export function Home() {
  return (
    <div className="flex">
      <Navbar.Root>
        <Navbar.Logo path="/" />

        <Navbar.Search path="#" text="Search Here" />

        <Navbar.Items>
          <Navbar.Item path="/musics" text="Músicas" />
          <Navbar.Item path="/artists" text="Artistas" />
        </Navbar.Items>

        <Navbar.Avatar path="/profile" image="Image Here"></Navbar.Avatar>
      </Navbar.Root>
      <Playlist.Root>
        <Playlist.Items>
          <Playlist.Item name="Playlist 1" path="#" />
          <Playlist.Item name="Playlist 2" path="#" />
          <Playlist.Item name="Playlist 3" path="#" />
          <Playlist.Item name="Playlist 4" path="#" />
          <Playlist.Item name="Playlist 5" path="#" />
          <Playlist.Item name="Playlist 6" path="#" />
          <Playlist.Item name="Playlist 7" path="#" />
          <Playlist.Item name="Playlist 8" path="#" />
        </Playlist.Items>
      </Playlist.Root>

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
