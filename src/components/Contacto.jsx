import { useState } from 'react';

/**
 * Formulario de contacto (Form de Bootstrap).
 * Guarda los campos en state y muestra un aviso al enviar.
 */
export default function Contacto() {
  const [datos, setDatos] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const cambiar = (evento) => {
    setDatos({ ...datos, [evento.target.name]: evento.target.value });
  };

  const enviar = (evento) => {
    evento.preventDefault();
    setEnviado(true);
    setDatos({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Contacto</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            {enviado && (
              <div className="alert alert-success" role="alert">
                ¡Mensaje enviado!
              </div>
            )}
            <form onSubmit={enviar}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  value={datos.nombre}
                  onChange={cambiar}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo
                </label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  className="form-control"
                  value={datos.correo}
                  onChange={cambiar}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="form-control"
                  value={datos.mensaje}
                  onChange={cambiar}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
