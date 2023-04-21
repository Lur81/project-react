import React, { useEffect, useState } from 'react'
import axios from "axios";
import HouseGallery from '../../components/HouseGallery/HouseGallery';

export default function HousePage (){

    const [house, setHouse] = useState([])

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/houses").then(res => {
    //         setHouse(res.data)
    //     })
    // },[])

    const getHouses = () => {
        axios.get("http://localhost:3000/characters").then(res => {
            setHouse(res.data)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getHouses()
    }, [])

    //AQUI IGUAL QUE EN EL DE CHARACTERSPAGE


    return(
        <div className='container'>
            <HouseGallery showHouse={house}/>
        </div>
    )
}