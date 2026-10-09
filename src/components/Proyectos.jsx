import TarjetaProyecto from './TarjetaProyecto.jsx';

/**
 * Sección que lista los proyectos usando el sistema de cuadrícula de Bootstrap.
 * @param {{proyectos: object[]}} props
 */
export default function Proyectos({ proyectos }) {
  return (
    <section id="proyectos" className="py-5">
      <div className="container">
        <h2 className="mb-4">Proyectos</h2>
        <div className="row g-4">
          {proyectos.map((proyecto) => (
            <div className="col-12 col-md-6 col-lg-4" key={proyecto.id}>
              <TarjetaProyecto {...proyecto} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
