/* const express = require('express')
const app = express()
const items = require('./items.json')

app.get('/items', (req,res) => {
    res.status(200).json(items)
})

app.post('/items', (req,res) => {
    items.push(req.body)
    res.status(200).json(items)
})

app.get('/items/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const item = items.find(item => item.id === id)
    res.status(200).json(item)
})

app.put('/items/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let item = items.find(item => item.id === id)
    item.name =req.body.name,
    item.type =req.body.type,
    item.price =req.body.price,
    res.status(200).json(item)
})

app.delete('/items/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let item = items.find(item => item.id === id)
    items.splice(items.indexOf(item),1)
    res.status(200).json(items)
})

app.listen(8080, () => {
  console.log('Serveur à l\'écoute')
}) */


const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});