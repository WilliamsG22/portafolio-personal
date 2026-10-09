import SeccionNoticias from './SeccionNoticias.jsx';
import { renderizar } from '../testUtils.js';

describe('SeccionNoticias', () => {
  it('muestra título, fecha y contenido de cada noticia', async () => {
    const noticias = [
      { titulo: 'Noticia 1', fecha: '2026-01-01', contenido: 'Contenido 1' },
      { titulo: 'Noticia 2', fecha: '2026-01-02', contenido: 'Contenido 2' },
    ];
    const vista = await renderizar(<SeccionNoticias titulo="Sección" noticias={noticias} />);
    const c = vista.contenedor;

    expect(c.querySelector('h3').textContent).toBe('Sección');
    expect(c.querySelectorAll('article').length).toBe(2);
    expect(c.textContent).toContain('2026-01-01');
    expect(c.textContent).toContain('Contenido 2');

    await vista.desmontar();
  });

  it('muestra un mensaje cuando no hay noticias', async () => {
    const vista = await renderizar(<SeccionNoticias titulo="Vacía" noticias={[]} />);

    expect(vista.contenedor.textContent).toContain('No hay noticias');

    await vista.desmontar();
  });
});
