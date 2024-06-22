// express
import express from 'express'

import MoviesRouting from './routes/moviesRoute.js'
import connectDB from './lip/db.js'

const app = express()
const PORT = 5000

// Data understanding middlewares
app.use(express.json()) /* ===> raw (json) methods working on */

// Connect DB
connectDB()

// Routes
app.get('/', (req, res) => {
  res.json({ msg: 'Hello students!' })
})

// Middlewares
app.use('/movies', MoviesRouting)

// listen
app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}`)
})
