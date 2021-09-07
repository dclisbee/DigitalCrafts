const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
  })  


  app.put('/cats', (req, res) => {
    res.send(`<h1>'Meow!'</h1>`)
  })  

  app.delete('/dogs', (req, res) => {
    res.send(`<h1>'Woof!'</h1>`)
  })  

  app.post('/cats_and_dogs', (req, res) => {
    res.send(`<h1>'Dogs and cats living together...mass hysteria!!'</h1>`)
  })  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })