import { createBrowserRouter } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import Music from '../pages/Music/Music';
import LayoutMusic from '../pages/Music/LayoutMusic';
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
      {
        path: 'music',
        element: <LayoutMusic />,
        children: [
          {
            path: '',
            element: <Music />,
          },
        ],
      },
    ],
  },
]);

export default router;
