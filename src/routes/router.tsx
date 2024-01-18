import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';
import App from '../../App';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: 'landing',
        element: <Landing />,
      },
      {
        path: '/',
        element: <Landing />,
      },
    ],
  },
]);
