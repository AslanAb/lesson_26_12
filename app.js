const express = require("express")
const bodeParcer = require("body-parser")
const compoenentsRouter = require("./routers/componentsRouters")
const fs = require("fs")
const app = express()

app.use(bodeParcer.json())
app.use(bodeParcer.urlencoded({extended: false}))

app.set("view engine", "hbs")
app.use("/static", express.static(__dirname + "/public"))
app.use("/components", compoenentsRouter)


app.listen(8080)
    