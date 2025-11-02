# 🧩 SEMÁNTICA

Esto refiere al uso de etiquetas con el **significado correcto**. En vez de usar contenedores genéricos (`divs`) para todo, usamos etiquetas que le dicen al *navegador*, a los *motores de busqueda* y las *tecnologias de accesibilidad* que tipo de contenido tienen.

- 🧱 **`<div>`:** Etiqueta genérica, es un contenedor sin significado. Tan solo indica que ahí dentro hay contenido y ya.
- 🧭 **Etiquetas semánticas:** Le dices a la web "aquí está la cabecera" o "aquí está el main".

---

## 🏷️ Etiquetas esenciales

| 🏷️ Etiqueta | 💬 Significado y uso | 🔁 Sustituye a |
| :--- | :--- | :--- |
| **`< header >`** | Contenido introductorio o un grupo de navegación, a menudo al inicio de la página o de una sección. Contiene logos, títulos, y menús. | `< div class="cabecera" >` |
| **`< nav >`** | Contiene enlaces de navegación principales a otras paginas o secciones de la misma, como los menus. | `< div class="menu-principal" >` |
| **`< main >`** | Contenido principal y dominante, solo debe haber uno por pagina!!! | `< div class="contenido-principal" >` |
| **`< section >`** | Agrupa contenido relacionado, como un about us, nuestros servicios, etc. Debe tener encabezado!! | `< div class="seccion-servicios" >` |
| **`< article >`** | Contenido independiente pero reutilizable, tipo un widget o un comentario | `< div class="widget" >` |
| **`< aside >`** | Contenido que se relaciona con el contenido alrededor como barras laterales | `< div class="barra-lateral" >` |
| **`< footer >`** | Es el pie de pagina, el cierre del documento o la seccion, tiene info de contacto, derechos de autor o enlaces secundarios | `< div class="footer" >` |

---

## 🌟  Beneficios

1. 🔍 **Mejora el SEO**, porque los motores de búsqueda entienden mejor tu estructura.  
2. ♿ **Ayuda a la accesibilidad**, los lectores de pantalla interpretan mejor tu contenido.  
3. 🧼 **Código más limpio y fácil de mantener**, sin `<div>` por todos lados.  
4. 💪 **Buenas prácticas modernas**, ¡te acostumbras a escribir como una pro del front-end! 😎

---

> 💬 *La semántica es como darle sentido al esqueleto de tu web: cada parte tiene su propósito, y el navegador te lo agradece 💻💖*