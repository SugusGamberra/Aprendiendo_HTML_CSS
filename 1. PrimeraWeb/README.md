# 🌐 FUNDAMENTOS HTML & CSS 

---

## 🧱 FUNDAMENTOS HTML

### 🧩 Estructura básica

Todas empiezan con una estructura que le dice al navegador **qué es** y **cómo interpretarlo**.

- `<! DOCTYPE html >` : Define el tipo de documento
- `< html lang="es" >` : Indica el idioma que se usa
- `< head >...</ head >`: Información que le da al navegador (metadatos, titulo de la pestaña, enlaces al css...).
- `< body >...</ body >`: Lo que tú ves.

### 🏷️ Etiquetas básicas

- **Textos**:
    - Títulos: `< h1 >...</ h1 >` a `< h6 >...</ h6 >`
    - Párrafos: `< p >...</ p >`
    - Listas ordenadas: `< ol > < li >...</ li > < li >...</ li > </ ol >`
    - Listas desordenadas: `< ul > < li >...</ li > < li >...</ li > </ ul > `
- **Enlaces**: `< a href="https://www.google.com/maps">Pulsa aqui para ver Google Maps</ a >`
- **Imágenes**: `< img src="...">`
- **Estructura semántica**: `< header >`, `< nav >`, `< main >`, `< footer >`, `< section >`.
- **Contenedores genéricos**: `< div >`, `< span >`.

### 💬 Comentarios

Como en todos lados usamos los comentarios para organizar nuestro código y ayudarnos a nosotros mismos o si tenemos compis de equipo también les ayuda a entender lo que andas tramando, pillin ñ.ñ Aquí se escriben así:

```html
< !--Creación de nuestra primera web básica con HTML y CSS-->
```

---

## 🎨 FUNDAMENTOS CSS

### 🧷 Formas de incluirlo

Lo más recomendado, así que no mencionaré (aún) el resto: 

- **Hoja de estilos externa**: Lo enlazas en el head `< link rel="stylesheet" href="estilo.css">`

### 🧭 Selectores básicos

- **De tipo**: Selecciona TODOS los elementos de un tipo: `h1`, `p`, etc.
- **De clase**: Selecciona aquellos que tengan un atributo class específico ( `.nombre-clase{...}`)
- **De ID**: Selecciona el elemento único con un atributo id específico ( `#nombre-id{...}`)

### 📦 Box Model

Cada elemento del HTML es como una caja rectangular:

- **Contenido**: Tu texto o lo que sea, el contenido real vaya.
- **Padding**: Es el espacio entre el contenido y el borde.
- **Border**: Es el espacio entre el padding y el margin.
- **Margin**: Es el espacio fuera del border, que separa de otros elementos.

> 👉 Te recomiendo buscar una imagen en internet porque es mucho mas visual asi ;3

### 🧮 Propiedades básicas

`color`,` background-color`, `font-size`, `width`, `height`, `margin`, `padding`... 

```css
h1 {
    color:aquamarine;
    font-family: Arial, sans-serif;
}
```

### 💬 Comentarios

Al igual que en el resto, aquí usamos comentarios también, casi nadie los usa pero yo lo recomiendo :3 (de hecho mucha gente no sabe de su existencia, pero llego yo frikarda y les abro mundo u///u):

```css
/* Degradado de fondo
color fijo background-color , degradado background */
```

# EJERCICIO

1. Crea una web sencilla. Para ello, crea una carpeta (hay que ser organizados) y nómbrala como prefieras. Dentro crea los siguientes archivos:
- `index.html`
- `styles.css`

a) En `index.html` a parte de su estructura base y enlazarle el `styles.css`, pon un header 1, un párrafo, una lista, un enlace y una imagen. 
b) En `styles.css` cambia el color del body, la fuente y su color, y dale un borde a la lista.

Estilo libre para la web :3 Puedes usar de referencia [mi HTML](../1.%20PrimeraWeb/1.%20PrimeraWeb/PrimeraWeb.html) y mi [CSS](../1.%20PrimeraWeb/1.%20PrimeraWeb/estilo.css)!

> 🩵 Recuerda: HTML construye la casa y CSS la decora hasta dejarla preciosa. 🎀