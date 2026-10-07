# landingpage

Landing page personal de Jesús David Marcano — portfolio y punto de contacto, pensada
para enlazarse desde LinkedIn y GitHub. HTML/CSS/JS plano, sin framework ni build
step, pensada para publicarse como *user site* de GitHub Pages
(`jesus-david.github.io`). Sólo en español.

## Estructura

```
index.html                       landing de una sola página: Inicio, Sobre mí, Proyectos, Contacto
projects/<proyecto>.html         una subpágina por proyecto, con un nombre corto del proyecto
404.html                         página de error de GitHub Pages
assets/css/style.css             tokens de diseño + estilos
assets/js/main.js                scroll-reveal y pestaña activa del menú, sin dependencias
assets/img/                      favicon, imágenes
```

La landing es una sola página con scroll. El menú es fijo y su pestaña activa cambia
sola según la sección que se está viendo (`main.js`); los enlaces son anclas
(`#sobre-mi`, `#proyectos`…), así que sin JS siguen funcionando. Las subpáginas de
proyecto enlazan de vuelta a `/#proyectos`.

## Agregar un proyecto

1. Copiar `projects/mirage-stream.html` a `projects/<proyecto>.html` y reescribir el texto.
   El nombre del archivo es parte de la URL pública: no uses el de un repo privado.
2. Agregar su tarjeta dentro de `.project-grid` en `index.html`.
3. Si el repo es público, un botón "Ver en GitHub" en la cabecera de la subpágina; si es
   privado, una nota en su lugar, para no publicar un enlace que da 404.

## Desarrollo local

```bash
python3 -m http.server
```

Y abrir `http://localhost:8000/`. Las rutas son absolutas (`/assets/…`), así que hay que
servir desde la raíz del repo.

## Despliegue

Es un *user site* de GitHub Pages: el repo remoto debe llamarse exactamente
`jesus-david.github.io` y publicar desde la rama `main`, sin GitHub Actions ni
configuración adicional — Pages lo activa solo al hacer push.

## Pendientes

Ver [`docs/pendientes.md`](docs/pendientes.md).
