# Informe de revisión y correcciones — DSY1104 Evaluación Formativa N.º 2

## Resultado honesto de la revisión

El proyecto incluye React, Bootstrap, componentes reutilizables, una introducción personal, tres tarjetas de proyectos, dos listas de noticias cargadas desde JSON, formulario de contacto y pruebas Jasmine/Karma. Se corrigieron casos de datos inválidos y se mejoró la documentación. **No se declara que la compilación ni las pruebas hayan pasado**, porque el entorno de revisión no logró instalar todas las dependencias de npm.

## Cambios aplicados en esta versión

1. `src/App.jsx`: valida que el JSON de noticias contenga las listas `logros` y `enProgreso`; si la estructura no corresponde, muestra un error en lugar de dejar la interfaz en un estado incoherente.
2. `src/App.spec.jsx`: añade una prueba para el caso en que el JSON responde correctamente, pero tiene una estructura inválida.
3. `src/components/SeccionNoticias.jsx`: maneja una prop que no sea una lista y descarta elementos nulos/no objeto para que no se rompa el renderizado.
4. `src/components/SeccionNoticias.spec.jsx`: añade cobertura para noticias nulas y para una lista que contiene un elemento nulo.
5. `src/components/TarjetaProyecto.jsx`: carga las imágenes de proyectos de forma diferida y abre los enlaces en una pestaña nueva con `rel="noopener noreferrer"`.
6. `BarraNavegacion.jsx`: el menú se cierra al seleccionar un enlace, mejorando la navegación móvil.
7. `TarjetaProyecto.jsx` y `src/data/proyectos.json`: los botones muestran “Ver perfil de GitHub” mientras sus URLs apunten al perfil general, en vez de prometer que llevan a cada proyecto.
8. `README.md`: organiza instrucciones de instalación, desarrollo, compilación, pruebas y publicación; identifica claramente las tareas que aún necesitan datos o evidencia real.
9. `PLAN_DE_PRUEBAS.md`: incorpora el caso de cierre del menú y deja claro que hay que registrar los resultados de una ejecución real.

## Estado frente a la pauta

| Criterio | Estado observado |
|---|---|
| React y componentes reutilizables | Presente en el código |
| Bootstrap y cuadrícula adaptable | Presente; falta comprobar visualmente en varios tamaños de pantalla |
| Presentación personal con imagen y biografía | Presente |
| Tres proyectos con imagen, descripción y tecnologías | Presente |
| Enlaces directos a repositorio/demo por proyecto | **Pendiente:** los tres enlaces actuales apuntan al perfil general de GitHub; se necesitan las URLs reales de cada proyecto |
| Dos secciones de noticias desde JSON | Presente; se añadió validación de estructura |
| Pruebas Jasmine/Karma y cobertura | Configuración y casos presentes; **ejecución y cobertura real pendientes** |
| README | Mejorado; las capturas y URL publicada todavía no se incluyen |
| GitHub Pages | No se pudo verificar una publicación desde este entorno |
| Accesibilidad | Hay textos alternativos, etiquetas de formulario, ARIA en el menú, foco visible y respeto por `prefers-reduced-motion`; falta una revisión manual completa |

## Verificación técnica realizada

- La validación local de archivos JSON y `package.json` se realiza al preparar el ZIP.
- `npm ci` no pudo completarse en el entorno de revisión; `node_modules` quedó incompleto (Vite no está disponible).
- Como las dependencias no quedaron instaladas, no fue posible ejecutar `npm run build` ni `npm run test:ci` de forma fiable. No se afirma que las pruebas estén aprobadas.

## Lo que falta para entregar sin pendientes

1. En `src/data/proyectos.json`, reemplazar los enlaces de perfil por las URLs directas reales de Gl1tch_St0re, Platinador y Diario de Arthur. No se inventaron enlaces.
2. Ejecutar con conexión a npm y Chrome instalado:
   ```bash
   npm ci
   npm run build
   npm run test:ci
   ```
3. Confirmar que se genere `coverage/index.html` y registrar los resultados reales en el plan de pruebas.
4. Tomar capturas reales del sitio (inicio, proyectos y noticias), guardarlas en `docs/` y enlazarlas en el README.
5. Publicar en GitHub Pages y agregar la URL pública verificada.
