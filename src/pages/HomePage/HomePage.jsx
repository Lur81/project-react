import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import "./HomePage.scss"

export default function HomePage(){

    return(
        <div className="home">
            <Header/>
            <div className="title">
                <h1 className="title_text">Games Of Thrones</h1>
            </div>

            <div>
                <Footer />
            </div>

        </div>
    )
}