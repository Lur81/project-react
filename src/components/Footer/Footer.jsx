import { Link } from "react-router-dom"
import "./Footer.scss"

export default function Footer(){
    return(
        <div className="footer">
            <nav className='footer_nav'>
                <Link className='nav_link' to="/character">Personajes</Link>
                <Link className='nav_link' to="/house">Casas</Link>
                <Link className='nav_link' to="/chronology">Cronologia</Link>
            </nav>
        </div>
    )
}