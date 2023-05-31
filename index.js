require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', (req, res) => {
    const mockUsers = require('./mockUsers.json')
    res.send(mockUsers)
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})