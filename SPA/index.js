const express = require('express')
const path = require('path')

const app = express()

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname,"frontend", "index.html"))
})

app.listen(4000, () => console.log('Server running...'))