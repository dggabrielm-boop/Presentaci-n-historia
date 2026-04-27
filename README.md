# Una isla a 145 km de Florida

Presentación interactiva lista para publicar con GitHub Pages.

## Archivos

- `index.html`: estructura principal.
- `style.css`: estilos visuales y responsivos.
- `app.js`: datos de las diapositivas, navegación y preguntas interactivas.
- `assets/`: carpeta para imágenes propias.

## Cómo usar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube estos archivos en la raíz del repositorio.
3. En el repositorio, entra a **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/root`.
6. Guarda los cambios y espera a que GitHub publique el sitio.

## Editar imágenes

La presentación usa bloques visuales generados con CSS. Si quieres reemplazarlos por imágenes:

1. Sube tus imágenes a `assets/`.
2. En `app.js`, agrega una propiedad `image: "assets/nombre.jpg"` a la diapositiva.
3. Ajusta `renderContentSlide()` para mostrar esa imagen si existe.

## Controles

- Flecha derecha / espacio: siguiente diapositiva.
- Flecha izquierda: diapositiva anterior.
- Índice: saltar a una diapositiva.
- Pantalla completa: modo presentación.
