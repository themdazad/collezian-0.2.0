/* eslint-disable no-undef */
const express = require('express') 
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is Collezian_Server!')
})

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`)
})