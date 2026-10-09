# Plan de pruebas

Herramientas: Jasmine (pruebas) + Karma (ejecución en navegador) + karma-coverage (informe de cobertura).

| N° | Componente | Caso de prueba | Resultado esperado |
|----|------------|----------------|--------------------|
| 1 | cargarJSON | Respuesta correcta | Devuelve el objeto del JSON |
| 2 | cargarJSON | Respuesta con error (404) | Lanza un error con el código |
| 3 | BarraNavegacion | Renderizado con props | Muestra el título y los enlaces recibidos |
| 4 | BarraNavegacion | Enlaces | Cada enlace apunta a `#id` de su sección |
| 5 | BarraNavegacion | Clic en el botón del menú | Se agrega y quita la clase `show` y cambia `aria-expanded` |
| 6 | Introduccion | Renderizado con props | Muestra nombre, título, biografía, foto con `alt` y enlace a GitHub |
| 7 | TarjetaProyecto | Renderizado con props | Muestra imagen con `alt`, título, descripción, tecnologías y enlace |
| 8 | Proyectos | Lista de 3 proyectos | Se crean 3 tarjetas |
| 9 | SeccionNoticias | Lista con 2 noticias | Muestra título, fecha y contenido de cada una |
| 10 | SeccionNoticias | Lista vacía | Muestra el mensaje "No hay noticias" |
| 11 | Contacto | Renderizado | Existen los 3 campos y el botón |
| 12 | Contacto | Escribir en un campo | El valor del campo se actualiza (state) |
| 13 | Contacto | Enviar formulario | Aparece el aviso de éxito y el formulario se limpia |
| 14 | App | Carga de noticias con `fetch` simulado | Se muestran las noticias de ambas secciones y 3 proyectos |
| 15 | App | `fetch` simulado con error | Se muestra el mensaje de error |

## Mocks

Se usa `spyOn(window, 'fetch')` de Jasmine para simular las respuestas del archivo JSON sin depender de un servidor.
