const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.render("index", { title: "Home" })
  next()
})

router.get("/user", (req, res, next) => {
    res.render("user", { title: "User" })
    next()
})

module.exports = router