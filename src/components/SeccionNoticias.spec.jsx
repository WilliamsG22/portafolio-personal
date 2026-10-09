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

  it('ignora elementos nulos dentro de la lista de noticias', async () => {
    const vista = await renderizar(
      <SeccionNoticias
        titulo="Noticias"
        noticias={[null, { titulo: 'Válida', fecha: '2026-01-01', contenido: 'Texto' }]}
      />
    );
    expect(vista.contenedor.querySelectorAll('article').length).toBe(1);
    expect(vista.contenedor.textContent).toContain('Válida');
    await vista.desmontar();
  });

  it('muestra un mensaje cuando no hay noticias', async () => {
    const vista = await renderizar(<SeccionNoticias titulo="Vacía" noticias={[]} />);

    expect(vista.contenedor.textContent).toContain('No hay noticias');

    await vista.desmontar();
  });
});

describe('SeccionNoticias con datos inválidos', () => {
  it('muestra el estado vacío si noticias no es una lista', async () => {
    const vista = await renderizar(<SeccionNoticias titulo="Noticias" noticias={null} />);
    expect(vista.contenedor.textContent).toContain('No hay noticias');
    await vista.desmontar();
  });
});
