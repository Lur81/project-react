export default function ChronologyPage({characters}){
    
        return (
            <div className="container">
                <div className="characters">
                    {characters.map((charac) => (
                        <div className="personajes" key={charac.id}>
                            <div className="imagen">
                                <img src={`http://localhost:3000${charac.image}`} alt={charac.name}/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
        )
    
}