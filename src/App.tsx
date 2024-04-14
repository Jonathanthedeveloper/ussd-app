import Code from './routes/Code';
import Dashboard from './routes/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import SavedCodes from './routes/SavedCodes';
import Settings from './routes/Settings';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: 'saved',
        element: <SavedCodes />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },

  {
    path: 'category/:category',
    element: <Code />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
