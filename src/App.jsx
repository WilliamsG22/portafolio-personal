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
  { id: 'noticias', texto: 'Noticias' },
  { id: 'contacto', texto: 'Contacto' },
];

export default function App() {
  // state con las noticias que se cargan desde el JSON
  const [noticias, setNoticias] = useState({ logros: [], enProgreso: [] });
  const [error, setError] = useState('');

  useEffect(() => {
    cargarJSON('data/noticias.json')
      .then((datos) => {
        // Validar la estructura esperada antes de entregarla a los componentes.
        if (
          !datos ||
          !Array.isArray(datos.logros) ||
          !Array.isArray(datos.enProgreso)
        ) {
          throw new Error('El archivo de noticias tiene un formato inválido.');
        }
        setNoticias(datos);
      })
      .catch((e) => setError(e.message || 'No se pudieron cargar las noticias.'));
  }, []);

  return (
    <>
      <BarraNavegacion titulo="Mi Portafolio" enlaces={enlaces} />
      <main>
        <Introduccion
          nombre="Williams Rivera García"
          titulo="Estudiante de Informática Duoc UC | Amante de los videojuegos y la tecnología"
          bio="Bienvenido a mi portafolio personal donde comparto mis proyectos y noticias recientes."
          foto="img/perfil.webp"
          github="https://github.com/WilliamsG22"
        />
        <Proyectos proyectos={proyectos} />
        <section id="noticias" className="py-5 bg-light">
          <div className="container">
            <h2 className="mb-4">Noticias</h2>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="row">
              <div className="col-12 col-md-6">
                <SeccionNoticias titulo="Logros" noticias={noticias.logros} />
              </div>
              <div className="col-12 col-md-6">
                <SeccionNoticias titulo="En progreso" noticias={noticias.enProgreso} />
              </div>
            </div>
          </div>
        </section>
        <Contacto />
      </main>
    </>
  );
}