import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './ChararterDetail.scss'
import Header from "../../components/Header/Header"
import { useTranslation } from "react-i18next";
import apiUrl from "../../config";


export default function CharacterDetail() {

    const [t] = useTranslation(['global']);

    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    const getCharactersById = () => {
        axios.get(apiUrl + 'characters' + id).then((res) => {
           axios.get(apiUrl + 'houses?name_like=' + res.data.house).then((resp) => {
            res.data.house = resp.data[0];
            setDetail(res.data);
           })
        });
    }



    useEffect(() => {
        getCharactersById("")
    },);

    return (
      

        <div>
            <div>
                <Header />
            </div>
         
            <div className="contenedor">
                <div className="image-character-detail">
                    <img src={detail.image} alt={detail.name} className="image-character" />
                    <h3 className="titulo-character-detail">{detail.name}</h3>
                </div>
                <div className="contenedor-detalles">
                        <div className="contenedor-house">
                            <h3 className="titulo-character-detail">{ t('house') }</h3>
                            {detail.house && detail.house.image && (
                                <img src={detail.house.image} alt={detail.house.name} className="image-house"/>
                            )}
                            {/* <img src={`http://localhost:3000${house}`} alt={detail.house} className="image-house"/> */}
                        </div>
                        <div>
                            <h3 className="titulo-character-detail">{ t('alliances') }</h3>
                            <div className="character-detail">
                            
                                {/* <li><p>{detail.alliances}</p></li> */}
                                {detail.alliances && detail.alliances.map((aliance, index) => (
                                    <li key={index}><p>{aliance}</p></li>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="titulo-character-detail">{ t('episodes') }</h3>
                            {/* <p>{detail.epsisodes}</p> */}
                            <div className="character-detail">
                            {detail.episodes && detail.episodes.map((episodes, index) => (
                                <li key={index}><p>{episodes}</p></li>
                            ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="titulo-character-detail">{ t('parents') }</h3>
                            <div>
                            
                                {/* <li><p>{detail.parents}</p></li> */}
                                {detail.parents && detail.parents.map((parents,index) => (
                                    <li key={index}><p>{parents}</p></li>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="titulo-character-detail">{ t('siblings') }</h3>
                            <div className="character-detail">
                            
                                {/* <li><p>{detail.siblings}</p></li> */}
                                {detail.siblings && detail.siblings.map((siblings, index) => (
                                    <li key={index}><p>{siblings}</p></li>
                                ))}

                            </div>
                        </div>
                        <div>
                            <h3 className="titulo-character-detail">{ t('titles') }</h3>
                            <div className="character-detail">
                            
                                {/* <li><p>{detail.titles}</p></li> */}
                                {detail.titles && detail.titles.map((titles, index) => (
                                    <li key={index}><p>{titles}</p></li>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
    )
       
}