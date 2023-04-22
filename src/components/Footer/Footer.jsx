import { Link } from "react-router-dom"
import "./Footer.scss"
import { useTranslation } from "react-i18next";

export default function Footer(){
    const [t] = useTranslation(['global']);
    return(
        <div className="footer">
            <nav className='footer_nav'>
                <div><Link className='nav_link' to="/character">{ t('characters') }</Link></div>
                <div><Link className='nav_link' to="/house">{ t('houses') }</Link></div>
                <div><Link className='nav_link' to="/chronology">{ t('chronology') }</Link></div>
            </nav>
        </div>
    )
}