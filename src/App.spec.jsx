import App from './App.jsx';
import { renderizar } from './testUtils.js';

describe('App', () => {
  it('carga las noticias desde el JSON y las muestra en las dos secciones', async () => {
    const datos = {
      logros: [{ titulo: 'Noticia tec', fecha: '2026-01-01', contenido: 'abc' }],
      enProgreso: [{ titulo: 'Noticia carrera', fecha: '2026-01-02', contenido: 'def' }],
    };
    spyOn(window, 'fetch').and.resolveTo({ ok: true, json: async () => datos });

    const vista = await renderizar(<App />);

    expect(window.fetch).toHaveBeenCalledWith('data/noticias.json');
    expect(vista.contenedor.textContent).toContain('Noticia tec');
    expect(vista.contenedor.textContent).toContain('Noticia carrera');
    expect(vista.contenedor.querySelectorAll('#proyectos .card').length).toBe(3);

    await vista.desmontar();
  });

  it('muestra un error claro si el JSON no contiene las dos listas esperadas', async () => {
    spyOn(window, 'fetch').and.resolveTo({
      ok: true,
      json: async () => ({ logros: [] }),
    });

    const vista = await renderizar(<App />);
    expect(vista.contenedor.querySelector('.alert-danger').textContent).toContain(
      'formato inválido'
    );
    await vista.desmontar();
  });

  it('muestra un mensaje de error si el JSON no se puede cargar', async () => {
    spyOn(window, 'fetch').and.resolveTo({ ok: false, status: 500 });

    const vista = await renderizar(<App />);

    expect(vista.contenedor.querySelector('.alert-danger')).not.toBeNull();

    await vista.desmontar();
  });
});