const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true}))

app.get('/listUsers', function (req, res) {
    fs.readFile(__dirname +"/user.json", "utf8", function(err, data){
        if (err) throw err
        //console.log(data)
        res.end(data)
    })
})

app.get('/form', function(req, res){
    res.sendFile(__dirname + "/form.html")
})

app.post('/add-user', function(req, res){
   // console.log(req.body.id)
   fs.readFile(__dirname +"/user.json", "utf8", function(err, data) {
        if (err) throw err
        data = JSON.parse(data)
        data["user"+req.body.id] = req.body
        //console.log(data)
        let newData = JSON.stringify(data)
        fs.writeFile(__dirname +"/user.json", newData, err => {
            if(err) throw err
            console.log("success")
        })
   })
})


const server = app.listen(8081, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("App listening ", host, port)
})
