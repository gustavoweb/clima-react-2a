import { useState } from 'react'
import './App.css'
import { CloudSunRain, MapPinned } from 'lucide-react';

function App() {

  return (
    <>
      <div className="app-container">
        <div className="content-wrapper">
          <header>
            <h1>
              <CloudSunRain color="white" size={48} />
              Consulta de Clima
            </h1>
            <p>Exemplo de consumo de API com React</p>
          </header>

          <div className="busca-box">
            <div className="busca-container">
              <input type="text" />
              <button>Buscar</button>
            </div>
          </div>

          {/* Resultado do Clima */}
          <div className="card-resultado">
            <div className="info-cidade">
              <div className="nome-cidade">
                <MapPinned color="red" size={48} />
                Campinas, BR
              </div>
              <p className="desc-cidade">Nublado</p>
            </div>

            {/* Temperatura Principal */}
            <div className="temperatura-box">
              <div className="temperatura-valor">
                28ºC
              </div>
              <div className="sens-termica">
                31ºC
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="detalhes-box">
              <div className="detal-item">
                <div className="detal-icone">
                  ICONE
                </div>
                <p className="detal-desc">
                  Min/Max
                </p>
                <p className="detal-valor">
                  25ºC/28ºC
                </p>
              </div>
            </div>

          </div>{/* Fecha Resultado */}

        </div>
      </div>
    </>
  )
}

export default App
