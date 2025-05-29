import { createBrowserRouter } from 'react-router-dom';
import { Home } from '@/pages/Home';
import ContentGenerator from './pages/Content';

export const router = createBrowserRouter([
  {
    path: '/content',
    element: <ContentGenerator />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },

]); 