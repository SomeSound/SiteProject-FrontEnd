import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages';
import App from '../../App';

export const Routes = createBrowserRouter([
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
