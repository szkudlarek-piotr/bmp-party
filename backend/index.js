const express = require('express')
const app = express()
const port = 3000

var getAllFoods = require('./getAllFoods')
var addFood = require('./addFood')

var cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/food/all', (req, res) => {
  res.send(getAllFoods())
})

app.post('/food', (req, res) => {
  console.log(1)
  addFood(req.body)
  res.send('OK')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})