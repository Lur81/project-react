import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header"
import { useTranslation } from "react-i18next";


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
    },[])

    const retroceder = () => {
          window.history.back();
    }

    return (
        <div>
            <div>
                <Header />
            </div>

            <div className="row">
                <p>{ t('name') }:{detail.name}</p>
                <p>{ t('settlement') }:{detail.settlement}</p>
                <p>{ t('region') }:{detail.region}</p>
                <p>{ t('alliances') }:{detail.alliances}</p>
                <p>{ t('religions') }:{detail.religions}</p>
                <p>{ t('foundation') }:{detail.foundation}</p>
            </div>
        </div>
    )
}