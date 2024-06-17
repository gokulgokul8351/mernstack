// express
import express from 'express'

import MoviesRouting from './routes/moviesRoute.js'

const app = express()
const PORT = 5000

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
