import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favorites from './pages/favorites/Favorites.jsx';
import Detail from './pages/details/Detail.jsx';
import Home from './pages/home/Home.jsx';
import GlobalState from './context/Context.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/receipe-item/:id",
        element: <Detail />,
      },
    ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalState>
    <RouterProvider router={router} />
    </GlobalState>
  </StrictMode>,
)
