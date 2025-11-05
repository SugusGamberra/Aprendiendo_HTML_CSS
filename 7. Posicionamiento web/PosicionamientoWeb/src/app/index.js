const express = require("express");
const app = express();
const publicPath = __dirname.replace("app", "public");
const router = require("./router/router");
const morgan = require("morgan");

app.set("port", process.env.PORT || 4040);
app.set("views", `${publicPath}/templates`);
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(express.static(publicPath));
app.use("/", router);

module.exports = app;