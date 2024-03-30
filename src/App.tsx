import { NextUIProvider } from '@nextui-org/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Player } from './components/Player/Player';

import './output.scss';
import './styles.scss';

export const App = () => {
  return (
    <NextUIProvider>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>

      <Player />
    </NextUIProvider>
  );
};
