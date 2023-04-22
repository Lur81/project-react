import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ChararterDetail.scss'
import Header from "../../components/Header/Header"
import { useTranslation } from "react-i18next";


export default function CharacterDetail() {

    const [t] = useTranslation(['global']);

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
            <div>
                <Header />
            </div>
         
            <div className="contenedor">
                <div className="image-character-detail">
                    <img src={`http://localhost:3000${detail.image}`} alt={detail.name} className="image-character" />
                    <h3 className="titulo-character-detail">{detail.name}</h3>
                </div>
                <div className="contenedor-detalles">
                        <div>
                            <h3 className="titulo-character-detail">{ t('house') }</h3>
                            <p>{detail.house}</p>
                        </div>
                        <div>
                            <h3 className="titulo-character-detail">{ t('alliances') }</h3>
                            <ul>
                                <li><p>{detail.alliances}</p></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="titulo-character-detail">{ t('episodes') }</h3>
                            <p>{detail.epsisodes}</p>
                        </div><div>
                            <h3 className="titulo-character-detail">{ t('parents') }</h3>
                            <ul>
                                <li><p>{detail.parents}</p></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="titulo-character-detail">{ t('siblings') }</h3>
                            <ul>
                                <li><p>{detail.siblings}</p></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="titulo-character-detail">{ t('titles') }</h3>
                            <ul>
                                <li><p>{detail.titles}</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       
    )
       
}