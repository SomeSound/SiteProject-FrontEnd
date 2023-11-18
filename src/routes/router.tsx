import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../components/Home';
import BaseTemplate from '../pages/BaseTemplate';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseTemplate />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default router;
