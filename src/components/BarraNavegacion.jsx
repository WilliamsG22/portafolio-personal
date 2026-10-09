import { useState } from 'react';

/**
 * Barra de navegación de Bootstrap.
 * Usa state para abrir y cerrar el menú en pantallas pequeñas.
 * @param {{titulo: string, enlaces: {id: string, texto: string}[]}} props
 */
export default function BarraNavegacion({ titulo, enlaces }) {
  const [abierto, setAbierto] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#inicio">
          {titulo}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir o cerrar menú"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          onClick={() => setAbierto(!abierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="menu-principal"
          className={`collapse navbar-collapse ${abierto ? 'show' : ''}`}
        >
          <ul className="navbar-nav ms-auto">
            {enlaces.map((enlace) => (
              <li className="nav-item" key={enlace.id}>
                <a className="nav-link" href={`#${enlace.id}`} onClick={() => setAbierto(false)}>
                  {enlace.texto}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
