const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("If this message appear, My website is COMPLETE !!")
})

app.listen(port)