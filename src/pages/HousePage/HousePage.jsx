import './HousePage.scss';
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { Link } from 'react-router-dom';


export default function HousePage ({houses}){

    // const [house, setHouse] = useState([])

    // useEffect(()=>{
    //     axios.get("http://localhost:3000/houses").then(res => {
    //         setHouse(res.data)
    //     })
    // },[])

    // const getHouses = () => {
    //     axios.get("http://localhost:3000/houses").then(res => {
    //         setHouse(res.data)
    //         console.log(res.data)
    //     })
    // }

    // useEffect(() => {
    //     getHouses()
    // }, [])

    //AQUI IGUAL QUE EN EL DE CHARACTERSPAGE

        return(
            <div>
            <Header/>
            <div className="container">
                <div className="contenedor">
                    <div className="houses">
                        {houses && houses.map((house,index) => (
                            <div key={index}>
                                <div className="homes">
                                    <Link to={`/houses/${house.id}`}>
                                        <img src={`http://localhost:3000${house.image}`} alt={house.name}/>
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

