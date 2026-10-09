/**
 * Sección de noticias reutilizable. Se usa dos veces con distintos datos.
 * @param {{titulo: string, noticias: {titulo: string, fecha: string, contenido: string}[]}} props
 */
export default function SeccionNoticias({ titulo, noticias = [] }) {
  // Evita que un JSON incompleto rompa el renderizado de la página.
  const listaNoticias = Array.isArray(noticias)
    ? noticias.filter((noticia) => noticia && typeof noticia === 'object')
    : [];

  return (
    <div className="mb-4">
      <h3 className="h4">{titulo}</h3>
      {listaNoticias.length === 0 ? (
        <p className="text-muted">No hay noticias para mostrar.</p>
      ) : (
        listaNoticias.map((noticia, indice) => (
          <article
            className="card mb-3"
            key={`${noticia.titulo || 'noticia'}-${noticia.fecha || indice}`}
          >
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
