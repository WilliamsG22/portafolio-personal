/**
 * Tarjeta de Bootstrap para mostrar un proyecto.
 */
export default function TarjetaProyecto({
  titulo,
  descripcion,
  tecnologias = [],
  imagen,
  enlace,
  textoEnlace = 'Ver proyecto',
  enProceso = false,
}) {
  return (
    <div className="card h-100 tarjeta-proyecto">
      <img
        src={imagen}
        className="card-img-top"
        alt={`Imagen del proyecto ${titulo}`}
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{titulo}</h3>
        <p className="card-text">{descripcion}</p>
        <div className="mb-3" aria-label="Tecnologías utilizadas">
          {tecnologias.map((tec) => (
            <span key={tec} className="badge text-bg-primary me-1">
              {tec}
            </span>
          ))}
        </div>

        {enProceso ? (
          <div className="mt-auto" aria-label={`${titulo}: en proceso`}>
            <span className="badge text-bg-warning text-dark">En proceso</span>
            <p className="text-muted small mt-2 mb-0">
              Este proyecto todavía está en desarrollo.
            </p>
          </div>
        ) : enlace ? (
          <a
            href={enlace}
            className="btn btn-outline-primary mt-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            {textoEnlace} <span className="flecha" aria-hidden="true">→</span>
          </a>
        ) : (
          <span className="text-muted small mt-auto">Enlace no disponible</span>
        )}
      </div>
    </div>
  );
}
