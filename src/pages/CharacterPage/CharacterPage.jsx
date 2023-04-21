import { useEffect, useState } from "react"
import axios from "axios";
import CharactersGallery from "../../components/CharactersGallery/CharactersGallery";

export default function CharacterPage() {

    const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //      axios.get("http://localhost:3000/characters").then(res => {
    //         setCharacters(res.data)
    //         // console.log(res.data)
    //     })
    // }, [])

    const getCharacters = () => {
        axios.get("http://localhost:3000/characters").then(res => {
            setCharacters(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getCharacters()
    }, [])

    //LO HE DEJADO HECHO CON FUNCIONES COMO OS COMENTABA ESTA TARDE PARA PODER LLAMARLAS Y EVITAR FALLOS (LUR)

    return (
        <div className="container">
            <CharactersGallery showCharacters={characters} />
        </div>
    )
}
