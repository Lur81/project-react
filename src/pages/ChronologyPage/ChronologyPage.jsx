import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './ChronologyPage.scss';
import { useState } from 'react';



export default function ChronologyPage({characters}){
        const[ageAsc, setAgeAsc] = useState(true)
        const orderCharacters = [...characters].sort((a, b) => 
            ageAsc ? a.age - b.age : b.age - a.age 
        )
    

      const orderByAge = () => {
        setAgeAsc(!ageAsc);
      }

        return (
            <div>
            <Header/>
            <div className="container">
                <div>
                    <button onClick={orderByAge}>{ageAsc ? "Order Desc" : "Order Asc"}</button> 
                    {/* // aqui hay que cambiar ord por el numero */}
                </div>
                
                <div className="characters">
                    {orderCharacters.map((charac) => (
                        <div className="personajes" key={charac.id}>
                            <p>{charac.age}</p>
                            <p>{charac.name}</p>
                            <div className="imagen">
                                <img className="chrono_img" src={`http://localhost:3000${charac.image}`} alt={charac.name}/>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
                <Footer />
            </div>
    
        )
    
}