import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CharacterDetail() {

    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    const getCharactersById = () => {
        axios.get(`http://localhost:3000/characters/${id}`).then(res => {
           setDetail(res.data)
            console.log("getCharactersById", res.data)
        })
    }
    useEffect(()=>{
        getCharactersById("");
    },[])

    return (
        <div>
            <div className="row">
                <p>Edad:{detail.age}</p>
                <p>Alianzas:{detail.alliances}</p>
                <p>Apariciones:{detail.epsisodes}</p>
                <p>Casa:{detail.house}</p>
                <p>ID:{detail.id}</p>
                <p>Nombre:{detail.name}</p>
                <p>Parientes:{detail.siblings}</p>
                <p>Títulos:{detail.titles}</p>
            </div>
        </div>
    )
}