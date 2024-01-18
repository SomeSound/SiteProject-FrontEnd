import { Outlet } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

import './src/output.scss';
import './src/styles.scss';
import { Navbar } from './src/components/Navbar';

function App() {
  return (
    <NextUIProvider>
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
    </NextUIProvider>
  );
}

export default App;
