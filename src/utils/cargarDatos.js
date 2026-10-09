/**
 * Lee un archivo JSON y devuelve su contenido ya convertido a objeto.
 * Si la respuesta no es correcta lanza un error.
 * @param {string} url Ruta del archivo JSON
 */
export async function cargarJSON(url) {
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    throw new Error(`No se pudo cargar ${url} (${respuesta.status})`);
  }
  return respuesta.json();
}
