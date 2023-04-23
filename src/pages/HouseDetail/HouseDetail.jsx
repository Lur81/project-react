import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header"
import { useTranslation } from "react-i18next";
import "./HouseDetail.scss"


export default function HouseDetail() {

    const [t] = useTranslation(['global']);

    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    const getHousesById = () => {
        axios.get(`http://localhost:3000/houses/${id}`).then(res => {
           setDetail(res.data)
            console.log("getHousesById", res.data)
        })
    }

    useEffect(()=>{
        getHousesById("");
    },)

    // const retroceder = () => {
    //       window.history.back();
    // }

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="contenedor">
                <div className="image-character-detail">
                <img src={`http://localhost:3000${detail.image}`} alt={detail.name} className="image-character" />
                <h2>{detail.name}</h2>
                </div>
                <div className="contenedor-detalles">
                    <div>{ t('settlement') }
                    <p>{detail.settlement}</p>
                    </div>
                    <div>{ t('region') }
                    <p>{detail.region}</p>
                    </div>
                    <div>{ t('alliances') }
                    {detail.alliances && detail.alliances.map((alianza, index) => (
                        <li key={index}><p>{alianza}</p></li>
                    ))}
                    </div>
                    <div>{ t('religions') }
                    <p>{detail.religions}</p>
                    </div>
                    <div>{ t('foundation') }
                    <p>{detail.foundation}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}