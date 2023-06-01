import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import apiUrl from "../../config";
import "./ChronologyPage.scss";
import { useState } from "react";

export default function ChronologyPage({ characters }) {
  const [ageAsc, setAgeAsc] = useState(true);
  const orderByAge = () => {
    setAgeAsc(!ageAsc);
  };
  const filteredCharacters = characters.filter((char) => char.age !== null);
  const orderCharacters = [...filteredCharacters].sort((a, b) =>
    ageAsc ? a.age - b.age : b.age - a.age
  );

  return (
    <div>
      <Header />
      <div className="contenedor">
        <div className="chronology">
          <div className="timeline">
            <div className="centrar-todo">
              <div>
                <button onClick={orderByAge} className="btn-chronology">
                  {ageAsc ? "⇩" : "⇧"}
                </button>
                {orderCharacters.length > 0 ? (
                  <div className="btn-chronology-age">
                    <p>{orderCharacters[0].age}</p>
                  </div>
                ) : (null
                )}
              </div>
              {orderCharacters.map((charac) => (
                <div key={charac.id} className="contenedor-chronology">
                  <div className="personajes">
                  {charac.age? ( 
                    <p> {charac.age} </p>) :
                    null}   
                    <h5>{charac.name}</h5>
                    <div className="imagen">
                      <img
                        className="chrono_img"
                        src={charac.image}
                        alt={charac.name}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}





