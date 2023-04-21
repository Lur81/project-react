import logo from './logo.svg';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharacterDetailPage from './pages/ChararterDetailPage/ChararterDetailPage';
import HousePage from './pages/HousePage/HousePage';
import HouseDetailPage from './pages/HouseDetailPage/HouseDetailPage';
import ChronologyPage from './pages/ChronologyPage/ChronologyPage';

function App() {
  return (
    <Router>

      <nav className='header_nav'>
        <Link className='nav_link' to="/character">Personajes</Link>
        <Link className='nav_link' to="/house">Casas</Link>
        <Link className='nav_link' to="/chronology">Cronologia</Link>
      </nav>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/character' element={<CharacterPage/>}/>
        <Route path='/character/:id' element={<CharacterDetailPage/>}/>
        <Route path='/house' element={<HousePage/>}/>
        <Route path='/house/:id' element={<HouseDetailPage/>}/>
        <Route path='/chronology' element={<ChronologyPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
