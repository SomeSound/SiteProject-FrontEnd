import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/router';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Player } from './components/Player/Player';

import './output.scss';
import './styles.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <Navbar />

        <Sidebar>
          <AppRoutes />
        </Sidebar>

        <Player />
      </NextUIProvider>
    </BrowserRouter>
  );
};
