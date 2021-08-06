// const http = require("http")
const express = require('express')
const fs = require('fs')
const app = express()
const port = 5000

app.get("/api", (req, res) => {
    var json = { "key1": "value1" };
    res.writeHead(200, { 'Content-Type': 'text/json' })
    res.write(JSON.stringify(json))
    res.end()
})

app.get("/api/timers", (req, res) => {
    fs.readFile('./data.json', (err, data) => {
        if (err) throw err
        const dataJson = JSON.parse(data)
        res.writeHead(200, { 'Content-Type': 'text/json' })
        res.write(JSON.stringify(dataJson))
        res.end()
    });
})

app.listen(port, () => {
    console.log('listening on port ' + port)
})

// var server = http.createServer(function (req, resp) {
//     var json = { "key1": "value1" };
//     resp.writeHead(200, { 'Content-Type': 'text/json' })
//     resp.write(JSON.stringify(json))
//     resp.end()
// })

// server.listen(3000)

// https://www.section.io/engineering-education/building-a-basic-api-with-nodejs/