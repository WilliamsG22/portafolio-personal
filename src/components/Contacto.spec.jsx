import Contacto from './Contacto.jsx';
import { renderizar, escribir, enviarFormulario } from '../testUtils.js';

describe('Contacto', () => {
  let vista;

  beforeEach(async () => {
    vista = await renderizar(<Contacto />);
  });

  afterEach(async () => {
    await vista.desmontar();
  });

  it('muestra los tres campos y el botón', () => {
    const c = vista.contenedor;
    expect(c.querySelector('#nombre')).not.toBeNull();
    expect(c.querySelector('#correo')).not.toBeNull();
    expect(c.querySelector('#mensaje')).not.toBeNull();
    expect(c.querySelector('button[type="submit"]')).not.toBeNull();
  });

  it('actualiza el estado al escribir en un campo', async () => {
    const campo = vista.contenedor.querySelector('#nombre');
    await escribir(campo, 'Williams');
    expect(campo.value).toBe('Williams');
  });

  it('muestra el aviso y limpia el formulario al enviar', async () => {
    const c = vista.contenedor;
    await escribir(c.querySelector('#nombre'), 'Williams');
    await enviarFormulario(c.querySelector('form'));

    expect(c.querySelector('.alert-success')).not.toBeNull();
    expect(c.querySelector('.alert-success').textContent).toContain('no se envió a un servidor');
    expect(c.querySelector('.confeti-capa')).not.toBeNull();
    expect(c.querySelector('#nombre').value).toBe('');
  });
});
