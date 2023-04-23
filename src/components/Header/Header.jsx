import { useTranslation } from "react-i18next";
import "./Header.scss";
import { Link, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { SearchContext } from "../../App";

export default function Header(){

    const [t, i18n] = useTranslation('global');

    const retroceder = () => {
        window.history.back();
    }

    const location = useLocation()
    console.log(location.pathname);

    const {searchText, setSearchText} = useContext(SearchContext);
    

    return(
        <div className="header">
            <div className="elementos">
                <div className="buscador">
                    {(location.pathname.indexOf('/characters/') >=0 || location.pathname.indexOf('/houses/') >=0) &&
                        
                        <button className="btn_back" onClick={retroceder}>{ t('back') }</button>
                    }
                    
                    {(location.pathname === '/character' || location.pathname === '/house') &&
                        <div className="buscador-caja">
                        <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                        </svg>
                            <input type="text" className="input_buscar" placeholder= {t('search')}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                    </div>}
                    
                </div>

                <div className="banderas">
                    {location.pathname !== '/' &&
                        <Link to={`/`}><img className="band_img_home" src="/assets/home.png" alt="home" /></Link>
                    }
                    <button onClick={() => i18n.changeLanguage("es")} className="band_btn"><img className="band_img" src="/assets/spanish.png" alt="Bandera españa"/></button>
                    <button onClick={() => i18n.changeLanguage("en")} className="band_btn"><img className="band_img" src="/assets/english.png" alt="Bandera inglesa"/></button>
                </div>
            </div>
        
        </div>
    )
}




