import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ChronologyPage.scss";
import { useState } from "react";

export default function ChronologyPage({ characters }) {
  const [ageAsc, setAgeAsc] = useState(true);
  const orderCharacters = [...characters].sort((a, b) =>
    ageAsc ? a.age - b.age : b.age - a.age
  );

  const orderByAge = () => {
    setAgeAsc(!ageAsc);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="contenedor">
          <div className="chronology">
            <div className="timeline">
            <div>
              <button onClick={orderByAge} className="btn-chronology">
                {ageAsc ? "⇩" : "⇧"}
              </button>
              {/* // aqui hay que cambiar ord por el numero */}
            </div>
            {orderCharacters.map((charac) => (
            <div key={charac.id} className="contenedor-chronology">
              <div className="personajes">
                <p>{charac.age}</p>
                <h5>{charac.name}</h5>
                <div className="imagen">
                  <img
                    className="chrono_img"
                    src={`http://localhost:3000${charac.image}`}
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
