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
      />
    );
    const c = vista.contenedor;

    expect(c.querySelector('h1').textContent).toBe('Ana Prueba');
    expect(c.textContent).toContain('Estudiante');
    expect(c.textContent).toContain('Mi biografía');
    expect(c.querySelector('img').getAttribute('alt')).toBe('Foto de perfil de Ana Prueba');
    expect(c.querySelector('a').getAttribute('href')).toBe('https://github.com/ana');

    await vista.desmontar();
  });
});
