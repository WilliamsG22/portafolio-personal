import BarraNavegacion from './BarraNavegacion.jsx';
import { renderizar, clic } from '../testUtils.js';

describe('BarraNavegacion', () => {
  const enlaces = [
    { id: 'inicio', texto: 'Introducción' },
    { id: 'proyectos', texto: 'Proyectos' },
  ];
  let vista;

  beforeEach(async () => {
    vista = await renderizar(<BarraNavegacion titulo="Mi Portafolio" enlaces={enlaces} />);
  });

  afterEach(async () => {
    await vista.desmontar();
  });

  it('muestra el título y los enlaces recibidos por props', () => {
    expect(vista.contenedor.querySelector('.navbar-brand').textContent).toBe('Mi Portafolio');
    const textos = [...vista.contenedor.querySelectorAll('.nav-link')].map((a) => a.textContent);
    expect(textos).toEqual(['Introducción', 'Proyectos']);
  });

  it('cada enlace apunta a su sección', () => {
    const enlace = vista.contenedor.querySelector('.nav-link');
    expect(enlace.getAttribute('href')).toBe('#inicio');
  });

  it('cierra el menú al seleccionar un enlace', async () => {
    const boton = vista.contenedor.querySelector('.navbar-toggler');
    const menu = vista.contenedor.querySelector('#menu-principal');
    const enlace = vista.contenedor.querySelector('.nav-link');

    await clic(boton);
    expect(menu.classList.contains('show')).toBeTrue();
    await clic(enlace);
    expect(menu.classList.contains('show')).toBeFalse();
    expect(boton.getAttribute('aria-expanded')).toBe('false');
  });

  it('abre y cierra el menú al hacer clic en el botón', async () => {
    const boton = vista.contenedor.querySelector('.navbar-toggler');
    const menu = vista.contenedor.querySelector('#menu-principal');

    expect(menu.classList.contains('show')).toBeFalse();
    await clic(boton);
    expect(menu.classList.contains('show')).toBeTrue();
    expect(boton.getAttribute('aria-expanded')).toBe('true');
    await clic(boton);
    expect(menu.classList.contains('show')).toBeFalse();
  });
});
