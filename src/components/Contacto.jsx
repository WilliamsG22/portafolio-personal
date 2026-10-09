import { useEffect, useState } from 'react';

/** Formulario de contacto de demostración con celebración visual al enviarlo. */
export default function Contacto() {
  const [datos, setDatos] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);
  const [mostrarConfeti, setMostrarConfeti] = useState(false);

  useEffect(() => {
    if (!mostrarConfeti) return undefined;
    const temporizador = window.setTimeout(() => setMostrarConfeti(false), 3200);
    return () => window.clearTimeout(temporizador);
  }, [mostrarConfeti]);

  const cambiar = (evento) => {
    setDatos((anteriores) => ({ ...anteriores, [evento.target.name]: evento.target.value }));
    setEnviado(false);
  };

  const enviar = (evento) => {
    evento.preventDefault();
    setEnviado(true);
    setMostrarConfeti(true);
    setDatos({ nombre: '', correo: '', mensaje: '' });
  };

  const piezasConfeti = Array.from({ length: 42 }, (_, i) => ({
    id: i,
    izquierda: `${(i * 37) % 100}%`,
    retraso: `${(i % 11) * 0.045}s`,
    duracion: `${2 + (i % 7) * 0.13}s`,
    color: ['#8b35ff', '#ff2bd6', '#00e5ff', '#ffd166', '#f5f7ff'][i % 5],
    deriva: `${((i * 19) % 160) - 80}px`,
  }));

  return (
    <section id="contacto" className="py-5 bg-light">
      {mostrarConfeti && (
        <div className="confeti-capa" aria-hidden="true">
          {piezasConfeti.map((pieza) => (
            <span
              key={pieza.id}
              className="confeti-pieza"
              style={{
                left: pieza.izquierda,
                animationDelay: pieza.retraso,
                animationDuration: pieza.duracion,
                backgroundColor: pieza.color,
                '--deriva': pieza.deriva,
              }}
            />
          ))}
        </div>
      )}
      <div className="container">
        <h2 className="mb-4">Contacto</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            {enviado && (
              <div className="alert alert-success" role="status" aria-live="polite">
                ¡Gracias por contactarme! 🎉 El formulario es una demostración: el mensaje no se envió a un servidor.
              </div>
            )}
            <form onSubmit={enviar}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  value={datos.nombre}
                  onChange={cambiar}
                  autoComplete="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input
                  id="correo"
                  name="correo"
                  type="email"
                  className="form-control"
                  value={datos.correo}
                  onChange={cambiar}
                  autoComplete="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
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
                Enviar mensaje 🎉
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
