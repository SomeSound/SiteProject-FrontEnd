import { Outlet } from 'react-router-dom';
import { Navbar } from './src/components/Navbar';

import './src/styles.scss';

function App() {
  return (
    <div className="app">
      <Navbar.Root>
        <Navbar.Logo path="/" />

        <Navbar.Search path="#" text="Search Here" />

        <Navbar.Items>
          <Navbar.Item path="/musics" text="Músicas" />
          <Navbar.Item path="/artists" text="Artistas" />
        </Navbar.Items>

        <Navbar.Avatar path="/profile" image="Image Here"></Navbar.Avatar>
      </Navbar.Root>

      <Outlet />
    </div>
  );
}

export default App;
