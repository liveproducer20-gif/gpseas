import { useState } from "react";
import "./App.css";

const estaciones = [
  {
    nombre: "EAS - Urdesa",
    sector: "Urdesa",
    mapa: "https://maps.app.goo.gl/ZueTz3TxVoKVnzDr7",
    imagen: "/images/eas1.png",
  },
  {
    nombre: "EAS - Lomas de Urdesa",
    sector: "Lomas de Urdesa",
    mapa: "https://maps.app.goo.gl/mecommwFD7bE6Sds7",
    imagen: "/images/eas2.png",
  },
  {
    nombre: "EAS - Kennedy Vieja",
    sector: "Kennedy Vieja",
    mapa: "https://maps.app.goo.gl/8vJveoKEhccnwUAg7",
    imagen: "/images/eas3.png",
  },
  {
    nombre: "EAS - Kennedy Norte",
    sector: "Kennedy Norte",
    mapa: "https://maps.app.goo.gl/VKjb3wpVJSJo6QUNA",
    imagen: "/images/eas4.png",
  },
  {
    nombre: "EAS - FAE/Atarazana",
    sector: "FAE / Atarazana",
    mapa: "https://maps.app.goo.gl/hwHcZGc6mrjYGBZPA",
    imagen: "/images/eas5.png",
  },
  {
    nombre: "EAS - Puerto Santa Ana",
    sector: "Puerto Santa Ana",
    mapa: "https://maps.app.goo.gl/arfvPMsr7msXwKaeA",
    imagen: "/images/eas6.png",
  },
  {
    nombre: "EAS - Samanes",
    sector: "Samanes",
    mapa: "https://maps.app.goo.gl/GHu6GKjUZJEfSwtC8",
    imagen: "/images/eas7.png",
  },
  {
    nombre: "EAS - Parque Centenario",
    sector: "Parque Centenario",
    mapa: "https://maps.app.goo.gl/bjMe8uanpmVCyefm8",
    imagen: "/images/eas8.png",
  },
  {
    nombre: "EAS - Plaza San Francisco",
    sector: "Plaza San Francisco",
    mapa: "https://maps.app.goo.gl/hfxwj7TxV2E5p1CGA",
    imagen: "/images/eas9.png",
  },
  {
    nombre: "EAS - Vía a la Costa",
    sector: "Vía a la Costa",
    mapa: "https://maps.app.goo.gl/eueS9sEwqBoSWHSQ7",
    imagen: "/images/eas10.png",
  },
  {
    nombre: "EAS - Barrio Centenario",
    sector: "Barrio Centenario",
    mapa: "https://maps.app.goo.gl/1juynyYamXLn2gCW9",
    imagen: "/images/eas11.png",
  },
  {
    nombre: "EAS - Ceibos",
    sector: "Ceibos",
    mapa: "https://maps.app.goo.gl/uUTBr3Hqji2F91PHA",
    imagen: "/images/eas12.png",
  },
  {
    nombre: "EAS - Cerro del Carmen",
    sector: "Cerro del Carmen",
    mapa: "https://maps.app.goo.gl/Sf9KQAFMY9EfafQf8",
    imagen: "/images/eas13.png",
  },
  {
    nombre: "EAS - San Felipe",
    sector: "San Felipe",
    mapa: "https://maps.app.goo.gl/YA8wRuZgAt3Chdey9",
    imagen: "/images/eas14.png",
  },
];

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);

  const estacionesPorPagina = 6;

  const estacionesFiltradas = estaciones.filter((eas) =>
    eas.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalPaginas = Math.ceil(
    estacionesFiltradas.length / estacionesPorPagina
  );

  const indiceInicial = (paginaActual - 1) * estacionesPorPagina;
  const indiceFinal = indiceInicial + estacionesPorPagina;

  const estacionesPagina = estacionesFiltradas.slice(
    indiceInicial,
    indiceFinal
  );

  const abrirMapa = (url) => {
    window.location.href = url;
  };

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <div className="brand-icon">EAS</div>

          <div>
            <h1>Estaciones de Acción Segura</h1>
            <span>Guayaquil</span>
          </div>
        </div>

        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#estaciones">Estaciones</a>
          <a href="#informacion">Información</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="hero-tag">GPS-EAS</span>

            <h2>
              Encuentra tu
              <span> Estación de Acción Segura</span>
            </h2>

            <p>
              Consulta las estaciones disponibles y abre directamente su
              ubicación en Google Maps.
            </p>

            <a href="#estaciones" className="hero-button">
              Ver estaciones
            </a>
          </div>

          <div className="hero-illustration">
            <div className="building">
              <div className="building-roof"></div>

              <div className="building-sign">
                <strong>EAS</strong>
                <span>ESTACIÓN DE ACCIÓN SEGURA</span>
              </div>

              <div className="building-window"></div>
              <div className="building-door"></div>
            </div>
          </div>
        </section>

        <section className="stations-section" id="estaciones">
          <div className="section-heading">
            <div>
              <span className="section-tag">UBICACIONES</span>

              <h2>Estaciones de Acción Segura</h2>

              <p>
                Selecciona una estación para consultar su ubicación.
              </p>
            </div>

            <div className="station-count">
              {estaciones.length}
              <span>estaciones</span>
            </div>
          </div>

          <div className="search-wrapper">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Buscar EAS..."
              value={busqueda}
              onChange={(e) => {
                setBusqueda(e.target.value);
                setPaginaActual(1);
              }}
            />
          </div>

          <div className="stations-grid">
            {estacionesPagina.map((eas, index) => (
              <article
                className="station-card"
                key={eas.nombre}
                onClick={() => abrirMapa(eas.mapa)}
              >
                <div className="station-image">
                  <img
                    src={eas.imagen}
                    alt={eas.nombre}
                    className="station-photo"
                  />

                  <span className="station-number">
                    {String(indiceInicial + index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="station-content">
                  <div>
                    <span className="station-label">
                      ESTACIÓN DE ACCIÓN SEGURA
                    </span>

                    <h3>{eas.nombre}</h3>

                    <p>📍 {eas.sector}</p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      abrirMapa(eas.mapa);
                    }}
                  >
                    Cómo llegar
                    <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {totalPaginas > 1 && (
            <div className="pagination">
              <button
                className="pagination-arrow"
                disabled={paginaActual === 1}
                onClick={() =>
                  setPaginaActual((pagina) =>
                    Math.max(1, pagina - 1)
                  )
                }
              >
                ←
              </button>

              {Array.from(
                { length: totalPaginas },
                (_, index) => {
                  const pagina = index + 1;

                  return (
                    <button
                      key={pagina}
                      className={`pagination-button ${
                        paginaActual === pagina ? "active" : ""
                      }`}
                      onClick={() => setPaginaActual(pagina)}
                    >
                      {pagina}
                    </button>
                  );
                }
              )}

              <button
                className="pagination-arrow"
                disabled={paginaActual === totalPaginas}
                onClick={() =>
                  setPaginaActual((pagina) =>
                    Math.min(totalPaginas, pagina + 1)
                  )
                }
              >
                →
              </button>
            </div>
          )}

          {estacionesFiltradas.length === 0 && (
            <div className="empty-state">
              No se encontraron estaciones con ese nombre.
            </div>
          )}
        </section>

        <section className="info-section" id="informacion">
          <div>
            <span className="section-tag">INFORMACIÓN</span>

            <h2>Más cerca de ti</h2>

            <p>
              Pagina web creada para facilitar la ubicación de las estaciones de acción segura en la ciudad de Guayaquil, Ecuador.
            </p>
          </div>

          <div className="info-card">
            <span>📍</span>

            <div>
              <strong>Ubicación directa</strong>
              <p>Acceso mediante Google Maps.</p>
            </div>
          </div>

          <div className="info-card">
            <span>📱</span>

            <div>
              <strong>Contacto</strong>
              <p>JORGE CALDERON - liveproducer20@gmail.com</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Estaciones de Acción Segura</strong>
           </div>

        <p>Guayaquil, Ecuador</p>
      </footer>
    </div>
  );
}

export default App;