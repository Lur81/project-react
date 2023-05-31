import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import axios from "axios";
import React, { useEffect, useState, Suspense } from "react";
// import { useTranslation } from "react-i18next";
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharacterDetail from "./pages/ChararterDetail/ChararterDetail";
import HousePage from "./pages/HousePage/HousePage";
import HouseDetail from "./pages/HouseDetail/HouseDetail";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import apiUrl from "./config";

export const SearchContext = React.createContext();

function App() {

  const [searchText, setSearchText] = useState("");

  // const [t] = useTranslation('global');
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);

  
  
  const getCharacters = () => {
    axios.get(apiUrl + 'characters').then(res => {
        setCharacters(res.data)
        console.log(res.data)
    })
  }

  const getHouses = () => {
    axios.get(apiUrl + 'houses').then(res => {
        setHouses(res.data)
        console.log(res.data)
    })
  }

  useEffect(() => {
      getCharacters();
      getHouses();
  }, [])

 

  return (
    <div>
    <SearchContext.Provider value={{searchText, setSearchText}}>
   <Suspense fallback= "Cargando...">
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/character' element={<CharacterPage characters={characters} />} />
        <Route path='/characters/:id' element={<CharacterDetail />} />
        <Route path='/house' element={<HousePage houses={houses}/>}/>
        <Route path='/houses/:id' element={<HouseDetail/>}/>
        <Route path='/chronology' element={<ChronologyPage characters={characters}/>}/>
      </Routes>
    </Router>
    </Suspense> 
    </SearchContext.Provider>
    </div>
  );
}

export default App;
