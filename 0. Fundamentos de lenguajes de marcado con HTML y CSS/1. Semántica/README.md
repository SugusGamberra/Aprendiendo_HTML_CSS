# SEMÁNTICA

Esto refiere al uso de etiquetas con el significado correcto. En vez de usar contenedores genéricos (divs) para todo, usamos etiquetas que le dicen al navegador, a los motores de busqueda y las tecnologias de accesibilidad que tipo de contenido tienen.

- div: Etiqueta genérica, es un contenedor sin significado. Tan solo indica que ahí dentro hay contenido y ya.
- Cualquier etiqueta semántica: Le dices a la web "aquí está la cabecera" o "aquí está el main".

## Etiquetas esenciales

| Etiqueta | Significado y uso | A que sustituye |
| :--- | :--- | :--- |
| **< header >** | Contenido introductorio o un grupo de navegación, a menudo al inicio de la página o de una sección. Contiene logos, títulos, y menús. | < div class="cabecera" > |
| **< nav >** | Contiene enlaces de navegación principales a otras paginas o secciones de la misma, como los menus. | < div class="menu-principal" > |
| **< main >** | Contenido principal y dominante, solo debe haber uno por pagina!!! | < div class="contenido-principal" > |
| **< section >** | Agrupa contenido relacionado, como un about us, nuestros servicios, etc. Debe tener encabezado!! | < div class="seccion-servicios" > |
| **< article >** | Contenido independiente pero reutilizable, tipo un widget o un comentario | < div class="widget" > |
| **< aside >** | Contenido que se relaciona con el contenido alrededor como barras laterales | < div class="barra-lateral" > |
| **< footer >** | Es el pie de pagina, el cierre del documento o la seccion, tiene info de contacto, derechos de autor o enlaces secundarios | < div class="footer" > |

## Beneficios

1. Mejora los motores de busqueda porque entienden mejor la estructura de tu página.
2. Las personas que usan tecnologias de accesibilidad te lo agradecerán :3
3. Código limpio y fñacil de mantener!