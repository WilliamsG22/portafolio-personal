import TarjetaProyecto from './TarjetaProyecto.jsx';
import Proyectos from './Proyectos.jsx';
import { renderizar } from '../testUtils.js';

const proyecto = {
  id: 1,
  titulo: 'Proyecto Uno',
  descripcion: 'Descripción uno',
  tecnologias: ['React', 'Bootstrap'],
  imagen: 'img/uno.svg',
  enlace: 'https://github.com/x/uno',
};

describe('TarjetaProyecto', () => {
  it('muestra imagen con alt, título, descripción, tecnologías y enlace', async () => {
    const vista = await renderizar(<TarjetaProyecto {...proyecto} />);
    const c = vista.contenedor;

    expect(c.querySelector('img').getAttribute('alt')).toContain('Proyecto Uno');
    expect(c.querySelector('.card-title').textContent).toBe('Proyecto Uno');
    expect(c.querySelector('.card-text').textContent).toBe('Descripción uno');
    expect(c.querySelectorAll('.badge').length).toBe(2);
    expect(c.querySelector('a').getAttribute('href')).toBe('https://github.com/x/uno');
    expect(c.querySelector('a').textContent).toContain('Ver proyecto');

    await vista.desmontar();
  });
});

describe('Proyectos', () => {
  it('crea una tarjeta por cada proyecto recibido', async () => {
    const lista = [proyecto, { ...proyecto, id: 2, titulo: 'Dos' }, { ...proyecto, id: 3, titulo: 'Tres' }];
    const vista = await renderizar(<Proyectos proyectos={lista} />);

    expect(vista.contenedor.querySelectorAll('.card').length).toBe(3);

    await vista.desmontar();
  });
});


describe('proyectos en proceso', () => {
  it('muestra la etiqueta y no permite abrir un proyecto pendiente', async () => {
    const vista = await renderizar(<TarjetaProyecto {...proyecto} enProceso={true} enlace="" />);
    const c = vista.contenedor;
    expect(c.textContent).toContain('En proceso');
    expect(c.querySelector('a')).toBeNull();
    await vista.desmontar();
  });
});
