import { cargarJSON } from './cargarDatos.js';

describe('cargarJSON', () => {
  it('devuelve los datos cuando la respuesta es correcta', async () => {
    const datos = { hola: 'mundo' };
    spyOn(window, 'fetch').and.resolveTo({ ok: true, json: async () => datos });

    const resultado = await cargarJSON('data/prueba.json');

    expect(window.fetch).toHaveBeenCalledWith('data/prueba.json');
    expect(resultado).toEqual(datos);
  });

  it('lanza un error cuando la respuesta no es correcta', async () => {
    spyOn(window, 'fetch').and.resolveTo({ ok: false, status: 404 });

    await expectAsync(cargarJSON('data/falta.json')).toBeRejectedWithError(
      /404/
    );
  });
});
