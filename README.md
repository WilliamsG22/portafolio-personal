# Portafolio Personal

Portafolio personal desarrollado con React y Bootstrap para DSY1104 – Evaluación Formativa N.º 2. Incluye componentes reutilizables, proyectos definidos en JSON, dos listas de noticias cargadas desde `public/data/noticias.json` y pruebas unitarias con Jasmine/Karma. Los botones de proyecto reflejan el destino actual y el menú móvil se cierra al seleccionar una sección.

## Requisitos

- Node.js LTS y npm.
- Google Chrome instalado para ejecutar las pruebas de Karma en modo headless.

## Instalar y ejecutar

```bash
npm ci
npm run dev
```

Abre la URL que muestre Vite en la terminal (normalmente `http://localhost:5173`).

## Compilar para producción

```bash
npm run build
npm run preview
```

La compilación se genera en `dist/`.

## Ejecutar las pruebas

```bash
npm run test:ci
```

El comando ejecuta Jasmine/Karma en Chrome headless. El informe de cobertura está configurado para generarse en `coverage/` en formatos HTML, LCOV y resumen de texto. Para ejecutar Karma en modo interactivo usa `npm test`. Si Chrome no se detecta automáticamente, configura `CHROME_BIN` con la ruta local del ejecutable antes de correr las pruebas.

## Estructura del proyecto

```text
src/
  components/   Componentes React y pruebas (*.spec.jsx)
  data/         Datos de los proyectos
  utils/        Funciones para cargar JSON
public/
  data/         Noticias consumidas por la aplicación
  img/          Imágenes de perfil y proyectos
```

## Publicar en GitHub Pages

El proyecto incluye el script `deploy`, que publica `dist/` en la rama `gh-pages`:

```bash
npm run deploy
```

Antes de ejecutarlo, confirma que el repositorio remoto sea el correcto y que GitHub Pages esté configurado para usar la rama `gh-pages`. La publicación no se puede dar por confirmada hasta revisar la URL del sitio.

## Pendientes antes de entregar

- **Enlaces específicos de los proyectos:** por ahora los botones dicen “Ver perfil de GitHub” porque las URLs configuradas apuntan al perfil general, no a repositorios individuales. Cuando tengas las direcciones reales, reemplaza cada campo `enlace` en `src/data/proyectos.json` y cambia `textoEnlace` a “Ver proyecto”. No se inventaron URLs.
- **Capturas de pantalla:** guarda capturas reales de la página inicial, los proyectos y las noticias en `docs/` y añádelas aquí. No se incluyen capturas simuladas.
- **Evidencia de ejecución:** ejecuta `npm ci`, `npm run build` y `npm run test:ci` en un entorno con conexión a npm y Chrome. Guarda el informe real de cobertura y registra los resultados en `PLAN_DE_PRUEBAS.md`.
- **Publicación:** después de desplegar, añade la URL pública de GitHub Pages.

## Limitación del formulario

El formulario de contacto es una demostración de interfaz: valida los campos, muestra un aviso y limpia el formulario, pero no envía correos ni guarda mensajes en un servidor.
