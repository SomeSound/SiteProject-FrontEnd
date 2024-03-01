import { NextUIProvider } from '@nextui-org/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/router';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { PlayerFixedComponent } from './components/Player/PlayerFixedComponent';

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

        <PlayerFixedComponent />
      </NextUIProvider>
    </BrowserRouter>
  );
};
