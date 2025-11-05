const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.render("index", { title: "Formularios" })
})

router.get("/buscar", (req, res, next) => {
  console.log(req.query);
  res.render("resultado", { 
    title: "Resultado Búsqueda",
    metodo: "GET",
    datos: req.query 
  });
});

router.post("/submit", (req, res, next) => {
  console.log("Datos POST (req.body):", req.body);
  res.render("resultado", { 
    title: "Resultado Registro",
    metodo: "POST",
    datos: req.body
  });
});

module.exports = router