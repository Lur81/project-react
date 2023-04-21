import { Link } from 'react-router-dom';
import './CharacterPage.scss';

export default function CharacterPage({ characters }) {
    return (
        <div className="container">
            <div className="characters">
                {characters.map((charac) => (
                    <div className="personajes" key={charac.id}>
                        <div className="imagen">
                             <Link to={`/characters/${charac.id}`}> <img src={`http://localhost:3000${charac.image}`} alt={charac.name} /></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )

}


// return (
//     <div className="contenedor">
//         {showCharacters && showCharacters.map((character, index) => (
//             <div key={index}>
//                 <div className="">
//                     <div className="char_img" >
//                         <Link to={`/character/:${character.id}`} onClick={()=> getId(character.id)}> <img src={`http://localhost:3000${character.image}`} alt={character.name} /></Link>
//                     </div>

//                     {/* Creo un div para meter el nombre del personaje(para prepararlo para el hover) */}
//                     <div>
//                         <h3 className="nombre">{character.name}</h3>
//                         {/* he dejado preparado el link para la pagina de detalles) */}
//                     </div>
//                 </div>

//             </div>

//         ))}
//         {/* <CharacterDetailPage getId={characterId} /> */}
//     </div>

// )