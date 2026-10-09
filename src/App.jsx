import { useEffect, useState } from 'react';
import BarraNavegacion from './components/BarraNavegacion.jsx';
import Introduccion from './components/Introduccion.jsx';
import Proyectos from './components/Proyectos.jsx';
import SeccionNoticias from './components/SeccionNoticias.jsx';
import Contacto from './components/Contacto.jsx';
import proyectos from './data/proyectos.json';
import { cargarJSON } from './utils/cargarDatos.js';

const enlaces = [
  { id: 'inicio', texto: 'Introducción' },
  { id: 'proyectos', texto: 'Proyectos' },
  { id: 'noticias', texto: 'Platinos' },
  { id: 'contacto', texto: 'Contacto' },
];

export default function App() {
  // state con las noticias que se cargan desde el JSON
  const [noticias, setNoticias] = useState({ tecnologia: [], carrera: [] });
  const [error, setError] = useState('');

  useEffect(() => {
    cargarJSON('data/noticias.json')
      .then(setNoticias)
      .catch((e) => setError(e.message));
  }, []);

  return (
    <>
      <BarraNavegacion titulo="Mi Portafolio" enlaces={enlaces} />
      <main>
        <Introduccion
          nombre="Williams Rivera García"
          titulo="Estudiante de Informática Duoc UC | Amante de los videojuegos y la tecnología"
          bio="Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes."
          foto="img/perfil.jpg"
          github="https://github.com/WilliamsG22"
        />
        <Proyectos proyectos={proyectos} />
        <section id="noticias" className="py-5 bg-light">
          <div className="container">
            <h2 className="mb-4">Mi proceso de platino</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="row">
              <div className="col-12 col-md-6">
                <SeccionNoticias titulo="Platinos conseguidos" noticias={noticias.tecnologia} />
              </div>
              <div className="col-12 col-md-6">
                <SeccionNoticias titulo="En progreso" noticias={noticias.carrera} />
              </div>
            </div>
          </div>
        </section>
        <Contacto />
      </main>
    </>
  );
}