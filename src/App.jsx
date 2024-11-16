
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Favorites from './pages/favorites/Favorites.jsx';
import Detail from './pages/details/Detail.jsx';
import Home from './pages/home/Home.jsx';

function App() {
  

  return (
   /*  <>
    <Navbar />
      <div>
      <Outlet />
      </div>
    </> */
    <div>
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/receipe-item/:id" element={<Detail />} />
      </Routes>
    </div>
  </div>
  )
}

export default App
