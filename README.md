# Portafolio Personal

Portafolio personal hecho con React, Bootstrap, noticias cargadas desde JSON y pruebas unitarias con Jasmine y Karma (DSY1104 – Evaluación Formativa N° 2).

## Capturas de pantalla

> Agrega aquí tus capturas (por ejemplo en `docs/captura-inicio.png`) y enlázalas así:
> `![Inicio](docs/captura-inicio.png)`

## Instalar

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## Probar

```bash
npm run test:ci
```

Corre las pruebas con Jasmine y Karma en Chrome headless. El informe de cobertura queda en `coverage/index.html`.
Para ejecutarlas en modo interactivo: `npm test`.

## Publicar en GitHub Pages

```bash
npm run deploy
```

Esto compila el proyecto y publica la carpeta `dist` en la rama `gh-pages`.

## Estructura

```
src/
  components/   Componentes React y sus pruebas (*.spec.jsx)
  data/         proyectos.json
  utils/        cargarDatos.js (lectura de JSON)
public/
  data/         noticias.json
  img/          imágenes
```
