# 🗓️ FORMULARIOS

Es una sección del documento que contiene **controles interactivos** que permiten al usuario introducir datos. Al enviarlo se genera una peticion HTTP al server con toda la info. Esta es la **base de interacción web**: registros, logins, busquedas, comentarios...

> ⚠️ **IMPORTANTE**: En este tema *SOLO* tratamos la estructura y definición del formulario. El procesamiento de la info en el server (con lenguajes como **PHP** o **BBDD**) lo veremos mas adelante!

---

## 🏷️ Contenedor principal (`form`)

Todos se definen con la etiqueta `< form > ... </ form >`, que contiene todos los campos de entrada y define como se envia la info.

### 🧾 Atributos Principales del Elemento `< form >`

#### 🔹 method

Define el método HTTP que se usará para enviar los datos al servidor.

##### 🟢 GET

- Los datos se envían en la **URL** como parámetros.
- Es adecuado cuando la operación **no modifica el estado del servidor** (es decir, la acción es segura y repetible).
- **Ejemplos típicos**: búsquedas, filtros o consultas.

```html
<form method="get" action="/buscar">
```

##### 🔵 POST

- Los datos se envían en el *cuerpo de la petición* no en la URL.
- Se usa cuando el formulario **modifica datos del servidor** (crear, eliminar o actualizar).
- Es el método **más seguro** para datos sensibles (contraseñas) o extensos.
- **Ejemplos típicos**: registros, logins o envio de comentarios.

```html
<form method="post" action="/guardar">
```

#### 🔹 action

Especifica la **URL del servidor o script** donde se enviarán los datos del formulario una vez enviado.

```html
<form action="/procesar">
```

---

## 🧩 Elementos básicos de Formulario HTML

Puede contener diversos **elementos de entrada** que permitan al user meter info. El elemento clave es `< input >` cuyo comportamiento se define con el atributo `type`.

| 🧱 **Elemento / Tipo** | 📖 **Descripción** | 🎯 **Uso Principal** |
| :--- | :--- | :--- |
| **Botones** | Permiten enviar o reiniciar el formulario. | `< button >`, `< input type="submit" >`, `< input type="reset" >` |
| **Cuadros de Texto** | Permiten introducir texto simple o largo. | `< input type="text" >`, `< textarea >` |
| **Casillas Checkbox** | Permiten marcar varias opciones. | `< input type="checkbox" >` |
| **Botones Radio** | Permiten elegir solo **una opción** entre un grupo (deben tener el mismo `name`). | `< input type="radio" >` |
| **Listas Desplegables** | Permiten seleccionar opciones de una lista. | `< select >` con `< option >` |

---

> 😉 Y ya estaría! Recuerdo que yo trabajo mejor con pug para todo, así que verás archivos extra y tal que a lo mejor a ti ni te van ni te vienen, quedate con que en el layout esta lo que inicia tu html, asi me lo ahorro en el index.pug, y en este es donde voy dandole forma al esqueleto! Y css pues ahi esta las cozas bonitas, eso es como siempre jeje