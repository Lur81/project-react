import './HousePage.scss';

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
            <div className="container">
            <div className="houses">
                {houses && houses.map((house,index) => (
                <div key={index}>
                    <div className="homes">
                        <img src={`http://localhost:3000${house.image}`} alt={house.name}/>
                        <h3>{house.name}</h3>
                    </div>
                    
                </div>
            ))}
            </div>
            </div>
        )
    
}

