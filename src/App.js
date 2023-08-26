import { useState } from "react";
import axios from "axios";
import Portifolio from '../src/assets/images/Group 85.png'
import Lupa from '../src/assets/images/icon-buscar.png'
import Sino from '../src/assets/images/material-symbols_notifications-outline-sharp.png'
import Perfil from '../src/assets/images/image 5.png'
import Seta from '../src/assets/images/bxs_up-arrow.png'
function App() {

  const [chamada, setChamada] = useState('')
  const [filmechamada, setFilmechamada] = useState([])

  async function Chamando() {
    let url = "https://www.omdbapi.com?apikey=d712d5e5&s=" + chamada
    let response = await axios.get(url)
    setFilmechamada(response.data.Search)
  }
  return (
    <div className="App">
      <div className="cabecalho">
      <div className="cabecalho2">
        <img src={Portifolio} alt="portifolio"/>
        <a>Inicio</a>
        <a>Séries</a>
        <a>Filmes</a>
        <a>Bombando</a>
        <a>Minha lista</a>
        
        <div className="elemento1">
          <input type="text" value={chamada} onChange={e => setChamada (e.target.value) } placeholder="Pesquisa pelo Titulo" />
          <img className="lupa" onClick={Chamando} src={Lupa} alt="Lupa" />
          <p>Vinícius</p>
          <img src={Sino} alt="sino" />
          <img src={Perfil} />
          <img src={Seta} />
        </div>
      </div>

      <div className="meio-da-pagina">
        <h1>Friends</h1>
        <p>Seis jovens são unidos por laços familiares, românticos e, principalmente, de amizade, enquanto tentam vingar em Nova York.</p>
        <button>Assistir</button>
      </div>
      </div>
      <p className="text-buscar">Resultado da Busca</p>
      <div className="filme">
        {filmechamada.map(item =>
        <div className="imagens-do-filme">
            <img src={item.Poster} />
          </div>
          )}
      </div>
    </div>
  );
}

export default App;
