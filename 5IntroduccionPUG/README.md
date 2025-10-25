# 🐶PUG🐶

## Qué es? 

Es un motor de plantilla de node.js (antiguamente se le conocia como jade) con el que escribiremos HTML con una sintaxis mucho mas sencilla y es facil de leer! 

Pug elimina la necesidad de usar caracteres que son una pesadilla (al menos para mí que tengo un teclado extranjero y ando cambiando el idioma del pc cada 3x2 por los dichosos simbolitos). Nos permite también hacer bloques de código para evitar repetirnos y permite el uso de JS, mixins, etc., asi que le podemos meter contenido dinámico en vez del aburrido HTML estático x.x

## IDE que usaremos

Para mí, en este caso, Visual Studio Code es el IDE perfecto. Así que lo puedes bajar de este [enlace](https://code.visualstudio.com) si aún no lo tienes e instalarlo (la instalación es sencilla, no hace falta explicarlo jeje).

## Instalar Node.js

Lo siguiente es bajar Node.js, si no lo tienes este es el [enlace](https://nodejs.org/es/download). Si no estás seguro de si lo tienes o no, abre el símbolo del sistema (inicio - escribes cmd o símbolo del sistema) o Ctrl + R, y escribes cmd. Una vez se haya abierto, escribe en el cmd lo siguiente:

node -v

Le das a enter y si te sale una versión con numeritos es que lo tienes, si no sale nada pues te toca instalarlo jiji La instalación es muy sencilla, creo que te pedía reiniciar el PC, si es así pues se le hace casito y palante! 

## Instalar todas las dependencias necesarias para poder usar Pug, Node...

Abre VSC, abre la terminal y en ella escribe:

npm init -y

Cuiiiiiiidao, tu carpeta del proyecto no debe contener caracteres raros ni espacios ni nada, full nombre normal, todo arrejuntao! Y casi mejor acostumbrarse ya a eso, yo por estética en cositas anteriores que sé que no son tan tikismikis lo puse a mi flow, pero mejor ya empezar a hacer las cosas en condiciones!!

Esto te creará tu package.json (donde va la config de tu proyecto jeje).

Ahora vamos a instalar el resto de dependencias, por ende en tu terminal escribe:

npm install express morgan pug

Le damos a enter y ya veras que se te han instalado todas las cositas!

Lo que acabamos de instalar es:

- Express: Para crear nuestra app web.
- Morgan: Nos permite ver todas las peticiones HTTP para debuggear ;3
- Pug: Nuestro sistema de plantillas :P

Por ultimo instalamos en forma de desarrollo a nodemon que nos permitirá correr nuestra app y que sin necesidad de apagar/encender el server podamos ir viendo todos los cambios:

npm install --dev nodemon

En nuestro package.json veremos todo lo que hemos instalado :P

## Cómo crear nuestro proyectito!

Como buenas prácticas buscamos tenerlo todo organizadito, así que desde VSC vamos a ir creando carpetitas, la estructura de carpetas y archivos se vería así:

5introduccionPUG/
├── node_modules/
├── src/
│   ├── app/
│   │   ├── index.js (El cerebro de Express)
│   │   └── router/
│   │       └── router.js (El portero de las URLs)
│   ├── public/
│   │   ├── css/
│   │   │   ├── style.css
│   │   │   └── test.css
│   │   ├── js/
│   │   │   └── script.js
│   │   └── templates/
│   │       ├── components/
│   │       │   ├── layout.pug
│   │       │   └── test_include.pug
│   │       ├── index.pug (El tutorial principal)
│   │       └── user.pug (Ejemplo de herencia)
│   └── server.js (El que arranca todo)
├── package.json
└── package-lock.json

### server.js

El archivo más sencillo y el que se ejecuta primero!

- require("./app/index"); Importa toda la config de express que vamos a hacer en app index
- app.get("port"): saca el puerto q hemos definido (4040)
- app.listen(...): sirve para escuchar las peticiones del puerto

### index.js

Es como la sala de control, configuramos todo aquí!  Cuidao, el orden de los app.use importan: los archivos estaticos y morgan suelen ir antes de la ruta, pero como lo hice a modo de tuto fui como por orden cronologico segun iba haciendo x,D

### package.json

Para no andar escribiendo "npx nodemon src/server.js" en nuestra terminal caaaada vez, añadimos atajos en la sección de scripts en scripts.

- npm start: arranca el servidor en modo "normal"
- npm run dev: arranca el server con nodemon para que se reinicie solo con cada cambio que vayamos haciendo.

### router.js

Este decide que se muestra cuando un usuario visita nuestra url.

### layout.pug

Con pug podemos hacer plantillas y llamarlas, es su sistema de herencias :,D de ahi que ame tantisimo usar pug :,(

### index.pug

Este es el archivo principal, donde te muestro todisima la sintaxis de pug. No le meto el sistema de herencias para que lo veas tal cual.

Encontrarás: 

- Variables.
- Clases e IDs.
- Condicionales.
- Iteraciones.
- Includes.
- Mixins.

Pug es una maravilla, con lo de los templates que puedas llamar tu layout y que no andes escribiendo de más si tienes 40 archivos .pug, los mixins para reusar codigo, las variables... esque te hace la vida mucho mas facil!!!

### user.pug

Aquí podemos ver como se usa el layout.pug, para que puedas ver lo limpito que queda el código con esta metodologia T^T

### style.css y script.js

Son los archivos estaticos.

- style.css: contiene el estilo para las clases que creamos en index.pug
- script.js: contiene el ejemplo de JS que se usa en index.pug para mostrar que funciona

_____________________________________________________________________

Puedes ver lo práctico y maravilloso que es pug!

He intentado explicar en todos lados a medida que iba haciendo cositas, pero como considero que esto no es tan para principiantes (requiere una base mínima de HTML, CSS y JS) no le he metido tanta chicha.

Puedes observar cada archivo y ya irás entendiendo todo lo que hago con dicha base!

Espero que te guste y que te animes a usar pug :3

Un abrazote!!!