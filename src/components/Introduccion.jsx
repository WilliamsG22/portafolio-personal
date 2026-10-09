/**
 * Sección de presentación con enlaces visibles a GitHub y YouTube.
 * Los iconos SVG están incluidos aquí para no depender de paquetes externos.
 */
export default function Introduccion({ nombre, titulo, bio, foto, github, youtube }) {
  return (
    <section id="inicio" className="hero text-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <img
              src={foto}
              alt={`Foto de perfil de ${nombre}`}
              className="foto-perfil rounded-circle mb-3"
            />
            <h1 className="h2">{nombre}</h1>
            <p className="lead">{titulo}</p>
            <p>{bio}</p>

            <div className="redes-sociales d-flex justify-content-center gap-3 flex-wrap mt-4">
              {github && (
                <a
                  className="btn btn-light boton-red-social"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver proyecto o perfil en GitHub"
                >
                  <svg
                    className="icono-red-social"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.21 3.27.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.62 5.23-5.11 5.51.4.35.76 1.02.76 2.06v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              )}

              {youtube && (
                <a
                  className="btn btn-light boton-red-social"
                  href={youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir enlace de YouTube"
                >
                  <svg
                    className="icono-red-social icono-youtube"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.57 12 3.57 12 3.57s-7.55 0-9.4.51A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.51 9.4.51 9.4.51s7.55 0 9.4-.51a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.55 15.6V8.4L15.8 12l-6.25 3.6Z" />
                  </svg>
                  <span>YouTube</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
