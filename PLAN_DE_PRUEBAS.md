# Plan de pruebas

Herramientas: Jasmine (pruebas) + Karma (ejecución en navegador) + karma-coverage (informe de cobertura).

| N° | Componente | Caso de prueba | Resultado esperado |
|----|------------|----------------|--------------------|
| 1 | cargarJSON | Respuesta correcta | Devuelve el objeto del JSON |
| 2 | cargarJSON | Respuesta con error (404) | Lanza un error con el código |
| 3 | BarraNavegacion | Renderizado con props | Muestra el título y los enlaces recibidos |
| 4 | BarraNavegacion | Enlaces | Cada enlace apunta a `#id` de su sección |
| 5 | BarraNavegacion | Clic en el botón del menú | Se agrega y quita la clase `show` y cambia `aria-expanded` |
| 5b | BarraNavegacion | Seleccionar un enlace en móvil | El menú se cierra y `aria-expanded` vuelve a `false` |
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
| 16 | App | JSON sin las dos listas esperadas | Se muestra un aviso de formato inválido |
| 17 | SeccionNoticias | Lista que contiene un elemento nulo | Ignora el elemento inválido y renderiza los datos válidos |

## Mocks

Se usa `spyOn(window, 'fetch')` de Jasmine para simular las respuestas del archivo JSON sin depender de un servidor.


## Resultados de ejecución y cobertura

Las pruebas se ejecutaron con `npm run test:ci` (Karma + Jasmine en Chrome Headless) y se generó el informe en `coverage/` con karma-coverage. Resumen del informe:

| Métrica | Cubierto | Total | Porcentaje |
|---------|----------|-------|------------|
| Líneas | 46 | 46 | 100 % |
| Funciones | 25 | 26 | 96,2 % |
| Ramas (branches) | 35 | 41 | 85,4 % |

Todos los componentes (`App`, `BarraNavegacion`, `Introduccion`, `Proyectos`, `TarjetaProyecto`, `SeccionNoticias`, `Contacto`) y la utilidad `cargarJSON` tienen pruebas. Las ramas no cubiertas corresponden a valores por defecto de props y a casos de datos incompletos poco frecuentes.

Para actualizar estos números después de cambiar el código, ejecuta `npm run test:ci` y abre `coverage/<navegador>/index.html`.
