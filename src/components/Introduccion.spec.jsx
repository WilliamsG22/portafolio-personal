import Introduccion from './Introduccion.jsx';
import { renderizar } from '../testUtils.js';

describe('Introduccion', () => {
  it('muestra nombre, título, biografía, foto con alt y enlace a GitHub', async () => {
    const vista = await renderizar(
      <Introduccion
        nombre="Ana Prueba"
        titulo="Estudiante"
        bio="Mi biografía"
        foto="img/foto.svg"
        github="https://github.com/ana"
        youtube="https://youtube.com/@ana"
      />
    );
    const c = vista.contenedor;

    expect(c.querySelector('h1').textContent).toBe('Ana Prueba');
    expect(c.textContent).toContain('Estudiante');
    expect(c.textContent).toContain('Mi biografía');
    expect(c.querySelector('img').getAttribute('alt')).toBe('Foto de perfil de Ana Prueba');
    expect(c.querySelector('a').getAttribute('href')).toBe('https://github.com/ana');
    expect(c.querySelectorAll('a').length).toBe(2);
    expect(c.querySelectorAll('a')[1].getAttribute('href')).toBe('https://youtube.com/@ana');
    expect(c.querySelectorAll('a svg').length).toBe(2);
    expect(c.querySelector('.boton-red-social').textContent).toContain('GitHub');
    expect(c.querySelectorAll('.boton-red-social')[1].textContent).toContain('YouTube');

    await vista.desmontar();
  });
});
