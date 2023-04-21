
import { useEffect, useState } from "react";
import CharactersDetailsGallery from "../../components/CharactersDetailsGallery/CharactersDetailsGallery";
import axios from "axios";
import CharactersGallery from "../../components/CharactersGallery/CharactersGallery";

export default function CharacterDetailPage(){

    const [characterDetail, setCharacterDetail] = useState([]);

    

    const getCharactersById = (id) => {
        axios.get(`http://localhost:3000/characters/${id}`).then(res => {
            setCharacterDetail(res.data)
            console.log("esto es mi getById", res.data)
        })
    }

    useEffect(() => {
        getCharactersById()
    }, [])


    return(
        <div>
            <CharactersDetailsGallery showCharacterDetails={characterDetail}/> 
        </div>
    )
}