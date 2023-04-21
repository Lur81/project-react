import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import axios from "axios";
import { useEffect, useState } from "react";
import CharacterPage from './pages/CharacterPage/CharacterPage';
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import HousePage from "./pages/HousePage/HousePage";
import CharacterDetail from "./pages/ChararterDetail/ChararterDetail";

function App() {

  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  


  const getCharacters = () => {
    axios.get("http://localhost:3000/characters/").then(res => {
        setCharacters(res.data)
        console.log(res.data)
    })
}
  const getHouses = () => {
    axios.get("http://localhost:3000/houses").then(res => {
        setHouses(res.data)
        console.log(res.data)
    })
}

useEffect(() => {
    getCharacters();
    getHouses();
}, [])

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/character' element={<CharacterPage characters={characters} />} />
        <Route path='/characters/:id' element={<CharacterDetail />} />
        <Route path='/house' element={<HousePage houses={houses}/>}/>
        {/* <Route path='/house/:id' element={<HouseDetailPage/>}/> */}
        <Route path='/chronology' element={<ChronologyPage characters={characters}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
