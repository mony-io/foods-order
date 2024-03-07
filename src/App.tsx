import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home.tsx';
import Root from './pages/Root.tsx';
import Food from './pages/Food.tsx';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'foods', element: <Food /> },
      { path: 'foods/:id', element: <Food /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
