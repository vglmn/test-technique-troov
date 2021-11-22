const express = require('express')
const app = express()
const items = require('./items.json')

app.get('/items', (req,res) => {
    res.status(200).json(items)
})

app.get('/items/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const item = items.find(item => item.id === id)
    res.status(200).json(item)
})
app.listen(8080, () => {
  console.log('Serveur à l\'écoute')
})