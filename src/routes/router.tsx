import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages';
import App from '../../App';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);
