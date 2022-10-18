const express = require('express')
const app = express()
const port = 3000
// db
const connectDB = require('./db/connect')
// require('dotenv').config({ path: './env' })
require('dotenv').config()
const task = require('./routes/task')
const notFound = require('./middleware/not-found')

const errorHandler = require('./middleware/error-handler')
// middleware
app.use(express.static('./public'))
app.use(express.json())
// routes
app.use('/api/v1/tasks', task)
app.use(notFound)
app.use(errorHandler)
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listining on ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
