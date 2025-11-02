# 📚 ESTRUCTURA DE TUS PROYECTOS

Creo que es importante mantener todo organizado! Piensa que si lo pones todo en una sola carpeta (imagenes, css, layouts, templates, js, java...) te vas a volver loco intentando encontrar las cosas, y más cuando empezamos a hacer proyectos grandotes!

---

## 🎀 Estructura minima y esencial

Tu proyecto debe contener una carpeta principal con el nombre de tu proyecto (mi-tutorial, miTutorial, whatever) y dentro seguir SIEMPRE esta jerarquia:

```pgsql
📂 mi-proyecto/
 ┣ index.html
 ┣ 📂 css/
 ┃  ┗ styles.css
 ┣ 📂 js/
 ┃  ┗ main.js
 ┗ 📂 img/
    ┗ logo.png
    ┗ fondo.jpg
```

> 💬 Esta estructura irá variando según necesidad: templates, layouts, blablabla. Por el momento es la estructura básica que debemos tener! Y es **MUY** importante acostumbrarse YA a ella!

### 📌 Componentes Clave:

| 📁 **Archivo / Carpeta** | 📄 **Contenido** | 🎭 **Rol** |
| :--- | :--- | :--- |
| **index.html** | Es la página principal y única que está fuera de carpetas. Es la “puerta de entrada”. | 🦴 *El esqueleto* |
| **css/** | Contiene todos los archivos de estilos (ej: `styles.css`). | 💅 *El maquillaje* |
| **js/** | Contiene todos los archivos de JavaScript (ej: `main.js`). | ⚡ *La interactividad* |
| **img/** | Contiene todas las imágenes, iconos y otros recursos visuales. | 🎨 *Los recursos visuales* |

---

## 🏆 Reglas para nombrar archivos

Para evitar problemas con el server y asegurar que **todos** los navegadores entiendan las rutas sigue estas reglas ;D

- **Minúsculas SIEMPRE**: `img`, `styles.css`...
- **SIN espacios**: En lugar de `mi foto.jpg` usa guiones `-` o guiones bajos `_` (`mi-fotaza.png`).
- **Archivos principales**: La pagina principal debe llamarse `index.html` y el archivo principal de estilos debe ser `styles.css`!!!

Como ahora empezamos a separar el *css* del *html* nos toca indicarle la ruta a tu `index.html` donde esta tu css! En vez de poner en el `href` directamente `styles.css` le indicamos que está en otra carpeta de la siguiente forma:

```html
<head>
    <meta charset="UTF-8">
    <title>Mi Tutorial Web</title>

    <link rel="stylesheet" href="css/styles.css"> 
</head>
```

---

> 🎉 Y queda todo donete!!! En adelante iremos dominando esta técnica, incluyendo ya el apartado de **formularios**