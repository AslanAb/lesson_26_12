const express = require("express")
const router = express.Router()
const fs = require("fs")
const { COMPONENTS_FILE_PATH } = require("../utils")

router.post("/", (req,res) => {
    const { name, params, hbs, styles } = req.body
    const componentsArray = JSON.parse(fs.readFileSync(COMPONENTS_FILE_PATH))
    const newComponent = {
        id: componentsArray[componentsArray.length]?.id + 1 || 1,
        name,
        params,
        hbs,
        styles
    }

    fs.writeFileSync(COMPONENTS_FILE_PATH, JSON.stringify(...componentsArray, newComponent))
    res.status(201).send("OK")
})

module.exports = router