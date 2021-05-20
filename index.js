const express = require('express')
const app = express()
const port = 8010

app.get("/", (req, res) => {
    res.send("If this message appear, My website is COMPLETE !!")
})

app.listen(port)