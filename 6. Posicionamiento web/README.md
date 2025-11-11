# 🎨 FLUJO Y POSICIONAMIENTO WEB

En **HTML** y **CSS* el flow es el orden en el que se colocan los elemntos en la página, básicamente el layout. Todo sigue un orden lógico (de arriba abajo y de izquierda a derecha).

Los elementos tienen 2 comportamientos principales 👇:

---

## 🧱 Bloques vs Inline

### 🧩 Block-level

- **Rompen el flujo**: Siempre empiezan en una nueva línea.
- **Ocupan todo el ancho disponible** de su contenedor (como los `< div >`, `< p >`, `< h1 >`...)
- **Respetan la propiedades `width`, `height`, `margin` (horizontal y vertical) y `padding`**.

> 💡 **Ejemplo**: párrafos, títulos, listas. Se apilan uno encima del otro.

### 💫 Inline-level

- **Respetan el flujo**: Se colocan uno al lado del otro si caben.
- **Ocupan solo el ancho de su contenido** (como un `< a >`, `< strong >`, `< span >`...)
- **Ignoran `width`, `height` y los `margin`/`padding` verticales.

> 💡 **Ejemplo**: Un enlace dentro de un párrafo.

> ✨ **El truquito**: `display: inline-bloc;` combina lo mejor de ambos mundos (se comportan en línea pero permiten `width`, `height` y `margin` verticales). Va bien para *botones* o *items de menú*.

---

## 🧺 Contenedores genéricos (`div` y `span`)

Esenciales para agrupar y dar estilo!!

### 🧱 `< div >`

- Contenedor de **bloque** genérico.
- Agrupa secciones grandes y layouts (columnas, tarjetas, wrappers...)
- Perfecto para darle estilo a varios elementos.

### `< span >`

- Contenedor **en línea** genérico.
- Agrupa trocitos de texto sin romper la línea.

> 💡 **Ejemplo**: `< p >Texto con una < span >palabra destacada</ span >.</ p >`

---

## Posicionamiento clásico (`float`)

Este **saca un elemento del flujo normal** y lo "pega" a la izquierda (`float: left;`) o derecha (`float: right;`) mientras que el texto y otros elementos fluyen alrededor de él.

> ⚠️ Antes se usaba para maquetar columnas, pero hoy se considera una **mala práctica**.
> 👉 **Uso moderno**: para imágenes flotantes junto a texto, como en periódicos.

Los `floats` rompen el contenedor padre (su altura puede colapsar) y es un problema, pero tiene fácil **solución**: `clear: both` o `clearfix`.

---

## Centrado de bloques

1. Debe ser un `display: block;`.
2. Debe tener un ancho especificado.
3. Aplicamos:

```css
margin: 0 auto;
```

Lo que equivale a:

```css
margin-top: 0;
margin-bottom: 0;
margin-left: auto;
margin-right: auto;
```

> ➡️ El navegador reparte los márgenes laterales automáticamente, dejando el bloque **centrado**.

---

## Posicionamiento "fino" (`position`)

Aquí es donde controlamos bien la **posición**. Los valores más comunes son:

| Valor      | Descripción                                                                                                                                |
| :--------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `static`   | Valor por defecto. El elemento sigue el flujo normal.                                                                                      |
| `relative` | Sigue en el flujo, pero puedes moverlo con `top`, `left`, `bottom`, `right`. Sirve como *ancla* para hijos con `absolute`.                 |
| `absolute` | Se **saca del flujo** y se posiciona respecto a su ancestro posicionado (o al `<body>` si no hay).                                         |
| `fixed`    | Igual que `absolute`, pero **fijo al viewport** (no se mueve con el scroll). Ideal para menús o botones “volver arriba”.                   |
| `sticky`   | Híbrido: se comporta como `relative` hasta que llegas al punto de scroll indicado (luego se “pega”). Perfecto para encabezados de sección. |

> 🧩 **Extra**: Puedes combinar `z-index` para controlar qué elemento está encima!

---

## Posicionamiento moderno (`flexbox` y `grid`)

El 99%, por no decir el 100%, de layouts se hacen con estos 2 módulos.

### 💪 Flexbox (`display: flex;`)

- Layout **unidimensional** (fila o columna).
- Perfecto para **alinear y centrar* elementos sin sufrir dolor de concha.
- Los usamos en menús, tarjetas, barras, botones...

### 🧩 Grid (`display: grid;`)

- Layout **bidimensional** (filas y columnas).
- Ideal para **estructuras completas** de la página.
- Te permite poner elementos con la precisión de un cirujano.

---

# FORMULARIOS!!

Para ver la explicación completa junto a su ejemplo ve a esta carpeta: [3. Formularios](../0.%20Fundamentos%20de%20lenguajes%20de%20marcado%20con%20HTML%20y%20CSS/3.%20Formularios/)

> 📌 En conclusión... `float` para imagenes flotantes, `position` para detalles pequeños como pop-ups o menuses fijos, y `flex` y `grid` para todo xd
> 🩷 Y yastaria!! A disfrutar creandoooo ;P