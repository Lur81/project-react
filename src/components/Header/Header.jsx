import { useTranslation } from "react-i18next";
import "./Header.scss";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";
import CharacterDetail from "../../pages/ChararterDetail/ChararterDetail";

export default function Header(){

    const [t, i18n] = useTranslation('global');

    const retroceder = () => {
        window.history.back();
    }

    const location = useLocation()
    console.log(location.pathname);

    // const [searchText, setSearchText] = useState("");
    

    return(
        <div className="header">
            <div className="elementos">
                <div className="buscador">
                    {(location.pathname.indexOf('/characters/') >=0 || location.pathname.indexOf('/houses/') >=0) &&
                        <button className="btn_back" onClick={retroceder}>{ t('back') }</button>
                    }

                    {(location.pathname === '/character' || location.pathname === '/house') &&
                        <input type="text" className="input_buscar" placeholder= {t('search')}
                            // value={searchText}
                            // onChange={(e) => setSearchText(e.target.value)}
                        />                    
                    }
                </div>

                <div className="banderas">
                    {location.pathname !== '/' &&
                        <Link to={`/`}><img className="band_img" src="assets/home.png" alt="home" /></Link>
                    }
                    <button onClick={() => i18n.changeLanguage("es")}><img className="band_img" src="assets/spanish.png" alt="Bandera españa"/></button>
                    <button onClick={() => i18n.changeLanguage("en")}><img className="band_img" src="assets/english.png" alt="Bandera inglesa"/></button>
                </div>
            </div>
        
        </div>
    )
}




