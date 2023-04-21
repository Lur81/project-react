
export default function CharactersDetailsGallery({ showCharacterDetails }) {

    return (
        <div>
            <div className="row">
                <p>Edad:{showCharacterDetails.age}</p>
                <p>Alianzas:{showCharacterDetails.alliances}</p>
                <p>Apariciones:{showCharacterDetails.epsisodes}</p>
                <p>Casa:{showCharacterDetails.house}</p>
                <p>ID:{showCharacterDetails.id}</p>
                <p>Nombre:{showCharacterDetails.name}</p>
                <p>Parientes:{showCharacterDetails.siblings}</p>
                <p>Títulos:{showCharacterDetails.titles}</p>
            </div>
        </div>
    )
}