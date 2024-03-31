import { NextUIProvider } from '@nextui-org/react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Player } from './components/Player/Player';
import { AuthProvider } from './context/AuthContext';
import { LoginDTO } from './services/customer/types';

import './output.scss';
import './styles.scss';

const data: LoginDTO = {
  email: 'lala',
  password: 'lala',
  token: 'lala',
};

export const App = () => {
  return (
    <AuthProvider>
      <NextUIProvider>
        <Navbar />

        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>

        <Player />
      </NextUIProvider>
    </AuthProvider>
  );
};
