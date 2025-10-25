const app = require("./app/index");

// Accedemos al puerto guardandolo en una variable ;3

const port = app.get("port")

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})