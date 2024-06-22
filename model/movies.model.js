import { Schema, model } from 'mongoose'

// write your schema
const schema = new Schema({
  title: String,
  desc: String,
})

// create your model
const Movie = model('Movie', schema)

export default Movie
