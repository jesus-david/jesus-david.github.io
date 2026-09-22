# landingpage

Landing page personal de Jesús David Marcano — portfolio y punto de contacto, pensada
para enlazarse desde LinkedIn y GitHub. HTML/CSS/JS plano, sin framework ni build
step, pensada para publicarse como *user site* de GitHub Pages
(`jesus-david.github.io`).

## Estructura

```
index.html, about.html, projects.html, contact.html   (inglés, en la raíz)
es/                                                     (mismas páginas en español)
assets/css/style.css                                   (tokens de diseño + estilos)
assets/js/main.js                                       (scroll-reveal, sin dependencias)
assets/img/                                             (favicon, imágenes)
```

El inglés vive en la raíz (URL canónica) y el español bajo `/es/`, con el mismo
nombre de archivo por página. El toggle de idioma de cada página enlaza directo a
su contraparte — no hay detección ni redirect por JS.

## Desarrollo local

```bash
python3 -m http.server
```

Y abrir `http://localhost:8000/` (inglés) o `http://localhost:8000/es/` (español).

## Despliegue

Es un *user site* de GitHub Pages: el repo remoto debe llamarse exactamente
`jesus-david.github.io` y publicar desde la rama `main`, sin GitHub Actions ni
configuración adicional — Pages lo activa solo al hacer push.

## Pendientes

Ver [`docs/pendientes.md`](docs/pendientes.md).
