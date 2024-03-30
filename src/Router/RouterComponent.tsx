import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing/Landing';
import { Register } from '../pages/Register/Register';
import { App } from '../App';

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
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/landing',
    element: <Landing />,
  },
]);
