# 🧩 FLEXBOX

> ✨ El superpoder moderno del CSS ✨  
> Flexbox (Flexible Box Layout) te permite alinear, distribuir y adaptar elementos dentro de un contenedor sin quebrarte la cabeza con `float`, `position` o `display: inline-block`.

---

## 💡 Que es?

Las últimas actualizaciones de CSS han metido **flexbox** (flexible box layout), es un modelo de diseño moderno y potente que permite controlar la distribucion y alineación de los elementos de un contenedor, incluso cuando su tamaño es desconocido o cambia de forma dinámica. Es capaz de distribuir los elementos de forma eficiente, adaptarse al espacio disponible, alinear y reorganizar contenido horizontal o verticalmente sin necesidad de usar float ni position.

Es una herramienta diseñada para organizar elementos en una sola dirección (fila o columna) ;3 

🧠 Ideal para:
- Centrar elementos sin dolor 🧘‍♀️  
- Crear layouts flexibles y responsive 📱  
- Evitar usar `float` o `position` innecesariamente  

---

## ⚙️ Cómo se usa?

1. Aplica `display: flex;` a tu contenedor en tu *.css*.
2. Los elementos hijos se convierten automáticamente en **flex items**.

### 🧱 HTML

Creamos nuestro contenedor:

```html
<div class="contenedor">
    <p> Hola! </p>
</div>
```

### 🎨 CSS

Le aplicamos el Flexbox:

```css
.contenedor {
    display: flex;
}
```
> 💅 Podemos ver un ejemplo full comentarios en [.html](./index.html) y en el [.css](./styles.css) ;D

---

## 🎛️ Propiedades del contenedor padre

- **flex-direction**: Define el eje principal, la dirección en la que se colocan los items.

| Valor | Descripción |
| :--- | :--- |
| `row` | (por defecto) izquierda → derecha |
| `row-reverse` | derecha → izquierda |
| `column` | arriba → abajo |
| `column-reverse` | abajo → arriba |

- **justify-content**: Alinea los items a lo largo del eje principal (flex-direction), controlando así el espaciado.

| Valor | Qué hace |
| :--- | :--- |
| `flex-start` | Alinea al inicio |
| `flex-end` | Alinea al final |
| `center` | Centra |
| `space-between` | Espacio entre los items |
| `space-around` | Espacio alrededor |

- **align-items**: Alinea los items a lo largo del eje transversal (perpendicular al principal).

| Valor | Qué hace |
| :--- | :--- |
| `flex-start` | Arriba |
| `flex-end` | Abajo |
| `center` | Centra verticalmente |
| `stretch` | Estira los items |
| `baseline` | Alinea según línea base del texto |

Para centrar cosas fácilmente el wombocombo de justify-content: center; + align-items: center;... son tus besties en adelante C:

---

## 🧸 Propiedades de los items hijos

- **flex-grow**: Especifica cuanto espacio extra debe ocupar el item (factor de crecimiento), por default es 0.
- **flex-shrink**: Especifica cuánto debe encogerse el item si no hubiera mucho espacio, por default es 1.
- **flex-basis**: Define el tamaño inicial del item antes de que se distribuya el espacio libre, lo puedes poner en auto o con un valor tipo 100px o 25%.
- **flex**: Engloba los 3 anteriores.
- **order**: Define el orden en el que aparece un item, por default es 0.

---

## 🌈 Conclusión

Flexbox te cambia la vida si vienes del trauma de float o position: absolute 😭
Una vez le pillas el truco, puedes alinear y distribuir elementos con una sola línea de CSS 🎯

> 😎 Consejo: Juega con las propiedades una por una y mira los cambios visuales.
> ✨ Te prometo que en nada lo dominarás como una diva del front