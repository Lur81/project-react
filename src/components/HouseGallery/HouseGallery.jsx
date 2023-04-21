export default function HouseGallery({showHouse}){

    return(
        <div>
            {showHouse && showHouse.map((house,index) => (
            <div key={index}>
                <div className="row">
                    <img src={`http://localhost:3000${house.image}`} alt={house.name}/>
                    <h3>{house.name}</h3>
                </div>
            </div>
        ))}
        </div>
    )
}