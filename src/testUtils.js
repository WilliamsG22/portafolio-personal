import { act } from 'react';
import { createRoot } from 'react-dom/client';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Monta un componente en el DOM real del navegador de Karma
export async function renderizar(elemento) {
  const contenedor = document.createElement('div');
  document.body.appendChild(contenedor);
  const raiz = createRoot(contenedor);
  await act(async () => {
    raiz.render(elemento);
  });
  return {
    contenedor,
    desmontar: async () => {
      await act(async () => raiz.unmount());
      contenedor.remove();
    },
  };
}

export async function clic(elemento) {
  await act(async () => {
    elemento.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });
}

// React controla los inputs, por eso se usa el setter nativo del value
export async function escribir(campo, valor) {
  const setter = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(campo),
    'value'
  ).set;
  await act(async () => {
    setter.call(campo, valor);
    campo.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

export async function enviarFormulario(formulario) {
  await act(async () => {
    formulario.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
  });
}
