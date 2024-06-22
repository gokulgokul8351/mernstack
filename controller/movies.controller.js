import Movie from '../model/movies.model.js'

export const MovieIndex = (req, res) => {
  res.send('Get all movies lists')
}

// create
export const MovieCreate = async (req, res) => {
  //  id, title, desc ===> format of db data's

  // validate your data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  })

  // validate success or error
  try {
    const movie = await newMovie.save()
    return res.status(201).json(movie)
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}

// update
export const MovieUpdate = (req, res) => {
  res.send('Movie updated')
}

// delete
export const MovieDelete = (req, res) => {
  res.send('Movie is deleted')
}
