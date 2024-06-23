// express
import express from 'express'
import cors from 'cors'
import MoviesRouting from './routes/moviesRoute.js'
import connectDB from './lip/db.js'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors())

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
