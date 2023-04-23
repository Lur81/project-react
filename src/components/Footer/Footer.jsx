import {  NavLink } from "react-router-dom"
import "./Footer.scss"
import { useTranslation } from "react-i18next";

export default function Footer(){
    const [t] = useTranslation(['global']);
    return(
        <div className="footer">
            <nav className='footer_nav'>
                <div><NavLink className='nav_link' to="/character">{ t('characters') }</NavLink></div>
                <div><NavLink className='nav_link' to="/house">{ t('houses') }</NavLink></div>
                <div><NavLink className='nav_link' to="/chronology">{ t('chronology') }</NavLink></div>
            </nav>
        </div>
    )
}