import { Schema, Types, model } from 'mongoose'

// write your schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
})

// create your model
const Movie = model('Movie', schema)

export default Movie
