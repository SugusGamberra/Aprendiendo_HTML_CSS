const express = require("express")

const app = express()

const publicPath = __dirname.replace("app", "public")

const router = require("./router/router")

const morgan = require("morgan")

// De esta forma configuramos el puerto, si no existe el puerto coge el 4040.
app.set("port", process.env.PORT || 4040)

// __dirname es la ruta donde estamos trabajando actualmente
// Nosotros queremos que nos lleve hasta public no hasta app!!
app.set("views", `${publicPath}/templates`)

// Le indicamos las plantillas que vamos a usar: puuuggg :D
app.set("view engine", "pug")

// Vamos a aplicar una funcion middleware que se ejecute dentro de mi express cuando este funcionando
app.use("/", router)

// morgan nos indica el codigo de respuesta y que todo funciona chachi!
app.use(morgan("dev"))

// Indicamos la carpeta publica para los archivos estaticos
app.use(express.static(publicPath))

module.exports = app