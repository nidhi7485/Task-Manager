const express = require('express')
const app = express()
const port = 3000
// db
const path = require('path')

const connectDB = require('./db/connect')
// require('dotenv').config({ path: './env' })
require('dotenv').config()
const task = require('./routes/task')
// routes
app.get('/hello', (req, res) => {
  res.send('hello people')
})
app.use(express.json())
app.use('/api/v1/task', task)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listining on ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
