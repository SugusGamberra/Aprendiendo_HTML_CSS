# FLEXBOX

## Que es?

Las últimas actualizaciones de CSS han metido flexbox (flexible box layout), es un modelo de diseño moderno y potente que permite controlar la distribucion y alineación de los elementos de un contenedor, incluso cuando su tamaño es desconocido o cambia de forma dinámica. Es capaz de distribuir los elementos de forma eficiente, adaptarse al espacio disponible, alinear y reorganizar contenido horizontal o verticalmente sin necesidad de usar float ni position.

Es una herramienta diseñada para organizar elementos en una sola dirección (fila o columna), es ideal para distribuir, alinear y espaciar los items dentro de un contenedor sin necesidad de usar floats.

## Cómo se usa?

Para utilizarlo en tu styles.css se aplica la propiedad a tu contenedor display: flex;. Los elementos hijos se convierten automáticamente en elementos flexibles.

Podemos ver un ejemplo full comentarios en [.html](./index.html) y en el [.css](./styles.css) ;D

### HTML

Creamos nuestro contenedor:

< div class="contenedor">
    < p > Hola! </ p >
</ div>

### CSS

Le aplicamos el Flexbox:

.contenedor {
    display: flex;
}

## Propiedades del contenedor padre

- flex-direction: Define el eje principal, la dirección en la que se colocan los items.
    - row: Por defecto, de izquierda a derecha.
    - row-reverse: Al revés de row.
    - column: En columna, de arriba a abajo.
    - column-reverse: Al revés de column.
- justify-content: Alinea los items a lo largo del eje principal (flex-direction), controlando así el espaciado.
    - flex-start: Alinea a la izquierda (inicio).
    - flex-end: Alinea a la derecha (final).
    - center: Lo centra.
    - space-between: Espacio entre los items.
    - space-around: Espacio alrededor de los items.
- align-items: Alinea los items a lo largo del eje transversal (perpendicular al principal).
    - flex-start.
    - flex-end.
    - center: La alineación vertical más usada.
    - stretch.
    - baseline.

Para centrar cosas fácilmente el wombocombo de justify-content: center; + align-items: center;... son tus besties en adelante C:

## Propiedades de los items hijos

- flex-grow: Especifica cuanto espacio extra debe ocupar el item (factor de crecimiento), por default es 0.
- flex-shrink: Especifica cuánto debe encogerse el item si no hubiera mucho espacio, por default es 1.
- flex-basis: Define el tamaño inicial del item antes de que se distribuya el espacio libre, lo puedes poner en auto o con un valor tipo 100px o 25%.
- flex: Engloba los 3 anteriores.
- order: Define el orden en el que aparece un item, por default es 0.