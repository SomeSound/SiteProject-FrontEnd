import { createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../pages/Home/Home';
import { Landing } from '../pages/Landing/Landing';
import { RegisterCustomer } from '../pages/Register/RegisterCustomer';
import { RegisterArtist } from '../pages/Register/RegisterArtist';
import { UploadTrack } from '../pages/UploadTrack/UploadTrack';

export const Routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/customer',
        element: <RegisterCustomer />,
      },
      {
        path: '/artist',
        element: <RegisterArtist />,
      },
      {
        path: '/upload',
        element: <UploadTrack />,
      },
    ],
  },
  {
    path: '/landing',
    element: <Landing />,
  },
]);
