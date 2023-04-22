import { useTranslation } from "react-i18next";
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./HomePage.scss"


export default function HomePage(){
    const [t] = useTranslation(['global']);

    return(
        <div className="home">
            <Header/>
            <div className="title">
                <h1 className="title_text">{ t('got') }</h1>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}