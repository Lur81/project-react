import { Link } from 'react-router-dom';
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './CharacterPage.scss';
import { useContext, useState } from 'react';
import { SearchContext } from '../../App';

export default function CharacterPage({ characters }) {
  const [hoveredId, setHoveredId] = useState();
  const {searchText, setSearchText} = useContext(SearchContext);

    return (
        <div>
        <Header/>
        
        <div className="container">
            <div className='contenedor'>
            <div className="characters">
                {characters.filter((dataSearch)=> dataSearch.name.toLowerCase().includes(searchText)).map((charac) => (
                    <div className="personajes" key={charac.id}
                    onMouseEnter={() => setHoveredId(charac.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="imagen">
                             <Link to={`/characters/${charac.id}`}>
                                <img src={`http://localhost:3000${charac.image}`} alt={charac.name} />
                                {hoveredId === charac.id && <h3 className='nombre'>{charac.name}</h3>}
                             </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            
        </div>
        <Footer />
        </div>

    )

}