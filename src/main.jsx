
import { createRoot } from 'react-dom/client'
/* import {
 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; */
import './index.css'
import App from './App.jsx'


/* import Favorites from './pages/favorites/Favorites.jsx';
import Detail from './pages/details/Detail.jsx';
import Home from './pages/home/Home.jsx'; */
import GlobalState from './context/Context.jsx';
import { BrowserRouter } from 'react-router-dom';
/* 
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
]); */

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <GlobalState>
   {/*  <RouterProvider router={router} /> */}
     <App />
    </GlobalState>
    </BrowserRouter>
  
)
