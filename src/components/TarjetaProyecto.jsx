/**
 * Tarjeta (Card de Bootstrap) que muestra un proyecto.
 * @param {{titulo: string, descripcion: string, tecnologias: string[], imagen: string, enlace: string}} props
 */
export default function TarjetaProyecto({
  titulo,
  descripcion,
  tecnologias,
  imagen,
  enlace,
}) {
  return (
    <div className="card h-100 tarjeta-proyecto">
      <img src={imagen} className="card-img-top" alt={`Imagen del proyecto ${titulo}`} />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title h5">{titulo}</h3>
        <p className="card-text">{descripcion}</p>
        <p>
          {tecnologias.map((tec) => (
            <span key={tec} className="badge text-bg-primary me-1">
              {tec}
            </span>
          ))}
        </p>
        <a href={enlace} className="btn btn-outline-primary mt-auto">
          Ver proyecto
        </a>
      </div>
    </div>
  );
}
