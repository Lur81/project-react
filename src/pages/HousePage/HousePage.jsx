import './HousePage.scss';
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchContext } from '../../App';
import apiUrl from '../../config';


export default function HousePage ({houses}){

    const {searchText} = useContext(SearchContext);

        return(
            <div>
            <Header/>
            <div className="container">
                <div className="contenedor">
                    <div className="houses">
                    {houses.filter((dataSearch)=> dataSearch.name.toLowerCase().includes(searchText)).map((house,index) => (
                            <div key={index}>
                                <div className="homes">
                                    <Link to={`/houses/${house.id}`}>
                                        <img src={apiUrl + house.image} alt={house.name}/>
                                        <h3 className="homes__name">{house.name}</h3>
                                    </Link>

                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            <Footer />
            </div>
        )
    
}

