/**
 * Sección de introducción: nombre, foto profesional y breve biografía.
 * @param {{nombre: string, titulo: string, bio: string, foto: string, github: string}} props
 */
export default function Introduccion({ nombre, titulo, bio, foto, github }) {
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
            <a className="btn btn-light" href={github}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
