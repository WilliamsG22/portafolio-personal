/**
 * Sección de noticias reutilizable. Se usa dos veces con distintos datos.
 * @param {{titulo: string, noticias: {titulo: string, fecha: string, contenido: string}[]}} props
 */
export default function SeccionNoticias({ titulo, noticias }) {
  return (
    <div className="mb-4">
      <h3 className="h4">{titulo}</h3>
      {noticias.length === 0 ? (
        <p className="text-muted">No hay noticias para mostrar.</p>
      ) : (
        noticias.map((noticia) => (
          <article className="card mb-3" key={noticia.titulo}>
            <div className="card-body">
              <h4 className="card-title h6">{noticia.titulo}</h4>
              <p className="card-subtitle text-muted mb-2">{noticia.fecha}</p>
              <p className="card-text">{noticia.contenido}</p>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
