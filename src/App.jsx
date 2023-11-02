import { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';

const Home = lazy(() => import('./components/Home/Home'));
const Projects = lazy(() => import('./components/Projects/Projects'));
// const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const PageLayout = () => {
  return (
    <>
      <Navbar />
        <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <Suspense fallback={null}><Home /></Suspense>,
      },
      {
        path: '/projects',
        element: <Suspense fallback={null}><Projects /></Suspense>,
      },
      {
        path: '*',
        element: <Suspense fallback={null}><NotFound /></Suspense>,
      }
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
