import { Link } from "react-router-dom";
import CharacterDetailPage from "../../pages/ChararterDetailPage/ChararterDetailPage";
import { useState } from "react";

export default function CharactersGallery({showCharacters}){

    const [characterId, setCharacterId] = useState([]);
    return(
        <div className="row">
        {showCharacters && showCharacters.map((character,index) => (
            <div key={index}>
                    <img src={`http://localhost:3000${character.image}`} alt={character.name}/>

                    {/* Creo un div para meter el nombre del personaje(para prepararlo para el hover) */}
                    <div>
                            {/* <h3>{character.name}</h3> */}
                            <Link className='nav_link' to={`/character/:${character.id}`}>{character.name}</Link>
                          
                             {/* he dejado preparado el link para la pagina de detalles) */}
                    </div>
                </div>
                
        ))}
        <CharacterDetailPage id={characterId}/>
        </div>
    
    )
}


//AQUÍ HE HECHO ALGUNA BARBARIDAD.... LO VEMOS MAÑANA :)

// onClick={()=> setCharacterId(character.id)} 